import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Article, ArticleView } from 'entities/Article'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    ))

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
    } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, [className, cls[view]], {})}>
                {getSkeletons(view)}
            </div>
        )
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    )

    return (
        <div className={classNames(cls.ArticleList, [className, cls[view]], {})}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    )
}
