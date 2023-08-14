import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { initArticlesPage } from './initArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 })
    })
    test('not success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        })
        await thunk.callThunk()

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalledWith()
    })
})
