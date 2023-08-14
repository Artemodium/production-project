import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import {
    ArticleList, ArticleView, ArticleViewSelector,
} from 'entities/Article'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import {
    getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/ArticlesPageSelectors'
import cls from './ArticlesPage.module.scss'
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice'

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlePageReducer,
}

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const view = useSelector(getArticlesPageView)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage())
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, [className], {})}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
