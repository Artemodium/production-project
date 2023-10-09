import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import cls from './ArticlesPage.module.scss'
import { articlePageReducer } from '../../model/slices/articlePageSlice'
import { useArticleItemById } from '../../model/selectors/ArticlesPageSelectors'
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlePageReducer,
}

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()

    const data = useArticleItemById('2')

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid="ArticlesPage"
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, [className], {})}
            >
                <ArticlesPageFilters className={cls.listBottom} />
                <ArticleInfiniteList className={cls.list} />
                <ArticlePageGreeting />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
