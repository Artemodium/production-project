import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Select, SelectOption } from '@/shared/ui/Select/Select'
import { SortOrder } from '@/shared/types'
import { ArticleSortField } from '../../model/consts/consts'
import cls from './ArticlesSortSelector.module.scss'

interface ArticlesSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t])

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('количеству просмотров'),
        },
    ], [t])

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField)
    }, [onChangeSort])

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder)
    }, [onChangeOrder])

    return (
        <div className={classNames(cls.ArticlesSortSelector, [className], {})}>
            <Select
                label={t('Сортировать ПО')}
                options={sortFieldOptions}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
            />
        </div>
    )
})
