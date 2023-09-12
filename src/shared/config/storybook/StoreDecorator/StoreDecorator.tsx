import { Story } from '@storybook/react'
// TODO
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
// eslint-disable-next-line my-path-checker-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/LoginSlice'
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line my-path-checker-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/ArticleDetailsSlice'
// eslint-disable-next-line my-path-checker-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice'
// eslint-disable-next-line my-path-checker-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices'
import { profileReducer } from '@/features/editableProfileCard'

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
