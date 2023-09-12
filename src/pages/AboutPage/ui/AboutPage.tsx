import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AboutPage = () => {
    const { t, i18n } = useTranslation('about')

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Page>
            {t('О сайте')}
        </Page>
    )
}

export default AboutPage
