import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/AticleDetailsPageHeader'
import { articleDetailsPageReducer } from '../../model/slices'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleRating } from '@/features/ArticleRating'
import { getFeatureFlag } from '@/shared/lib/features';
import { Counter } from '@/entities/Counter';

interface ArticleDetailsPageProps {
    className?: string
}

const reducersList: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const isArticleRatingsEnabled = getFeatureFlag('isArticleRatingEnabled')
    const isCounterEnabled = getFeatureFlag('isCounterEnabled')

    if (!id) {
        return null
    }

    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailsPage, [className], {})}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isCounterEnabled && <Counter />}
                    {isArticleRatingsEnabled && <ArticleRating articleId={id}/>}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
