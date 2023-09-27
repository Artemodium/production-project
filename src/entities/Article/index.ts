export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'

export type { Article } from './model/types/article'

export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema'

export {
    articleDetailsReducer,
    articleDetailsActions,
} from './model/slice/ArticleDetailsSlice'

export { ArticleList } from './ui/ArticleList/ArticleList'

export { ArticleTextBlockComponent } from './ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
export { getArticleDetailsData } from './model/selectors/articleDetails'
export {
    ArticleView,
    ArticleType,
    ArticleBlockType,
    ArticleSortField,
} from '../Article/model/consts/consts'
