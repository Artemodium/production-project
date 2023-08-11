export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails'

export type { Article } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema'
export { ArticleView } from './model/types/article'
export { articleDetailsReducer, articleDetailsActions } from './model/slice/ArticleDetailsSlice'

export { ArticleList } from './ui/ArticleList/ArticleList'

export { ArticleTextBlockComponent } from './ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'
