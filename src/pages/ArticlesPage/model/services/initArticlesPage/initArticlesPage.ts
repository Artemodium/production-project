import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { getArticlesPageInited } from '../../selectors/ArticlesPageSelectors'

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPages/initArticlesPage',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI
            const inited = getArticlesPageInited(getState())

            if (!inited) {
                dispatch(articlePageActions.initState())
                dispatch(fetchArticlesList({
                    page: 1,
                }))
            }
        },
    )
