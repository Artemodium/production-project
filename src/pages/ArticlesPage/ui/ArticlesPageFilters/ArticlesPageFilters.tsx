import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import {
    ArticleView, ArticleViewSelector, ArticlesSortSelector, ArticleSortField, ArticleTypeTabs,
} from 'entities/Article'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/input/Input'
import { SortOrder } from 'shared/types'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { ArticleType } from 'entities/Article/model/types/article'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/ArticlesPageSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 600)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder))
        dispatch(articlePageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageActions.setSearch(search))
        dispatch(articlePageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageActions.setType(value))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(cls.ArticlesPageFilters, [className], {})}>
            <div className={cls.sortWrapper}>
                <ArticlesSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    )
})