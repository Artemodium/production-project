import { Article } from 'entities/Article'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsPageRecommendationsSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
}
