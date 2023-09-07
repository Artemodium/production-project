import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page/Page'
import cls from './ForbiddenPage.module.scss'

interface ForbiddenPageProps {
    className?: string
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.ForbiddenPage, [className], {})}>
            {t('У вас нет доступа к этой странице')}
        </Page>
    )
})
