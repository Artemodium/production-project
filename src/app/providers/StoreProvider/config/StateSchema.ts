import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/AuthByUsername'
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { ProfileSchema } from 'entities/Profile'
import { AxiosInstance } from 'axios'
import { To } from 'react-router-dom'
import { NavigateOptions } from 'react-router'
import { CounterSchema } from 'entities/Counter'
import { ArticleDetailsSchema } from 'entities/Article'
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { addCommentFormSchema } from 'features/addCommentForm'
import { ArticlePageSchema } from 'pages/ArticlesPage'
import { UISchema } from 'features/UI'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    ui: UISchema
    // Async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: addCommentFormSchema
    articlesPage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    //
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
