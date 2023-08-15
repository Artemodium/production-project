import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {
    getArticlesPageHasMore, getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPagePageNum,
} from '../../selectors/ArticlesPageSelectors'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPages/fetchNextArticlePage',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI
            const hasMore = getArticlesPageHasMore(getState())
            const page = getArticlesPagePageNum(getState())
            const isLoading = getArticlesPageIsLoading(getState())

            if (hasMore && !isLoading) {
                dispatch(articlePageActions.setPage(page + 1))
                dispatch(fetchArticlesList({}))
            }
        },
    )
