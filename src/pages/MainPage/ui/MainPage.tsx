import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { RatingCard } from '@/entities/Rating'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <Page>
            {t('Главная страница')}
            <StarRating size={50} />
            <RatingCard
                title="Как вам статья"
                feedbackTitle="Оставьте отзыв о статье"
                hasFeedback
            />
        </Page>
    )
}

export default MainPage
