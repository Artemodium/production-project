import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Article'
import { fetchCommentByArticleId } from '../../services/fetchCommentByArticleId/fetchCommentByArticleId'

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
        return rejectWithValue('error')
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
        })

        if (!response.data) {
            throw new Error()
        }

        dispatch(fetchCommentByArticleId(article.id))

        return response.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
