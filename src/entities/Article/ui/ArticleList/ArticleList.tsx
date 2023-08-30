import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Article, ArticleView } from '../../../Article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    ))

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        virtualized = true,
    } = props
    const { t } = useTranslation()

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    )

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, [className, cls[view]], {})}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, [className, cls[view]], {})}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    )
})
