import {
    createEntityAdapter,
    createSlice, EntityState, PayloadAction,
} from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment'
import { StateSchema } from 'app/providers/StoreProvider'
import { fetchCommentByArticleId } from 'pages/ArticleDetailsPage'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
)

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArticleId.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCommentByArticleId.fulfilled, (state, action:PayloadAction<Comment[]>) => {
                state.isLoading = false
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
