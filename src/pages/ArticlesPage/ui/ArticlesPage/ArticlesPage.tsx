import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string;
}

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article')

    return (
        <div className={classNames(cls.ArticlesPage, [className], {})}>
            {t('Статьи')}
        </div>
    )
}

export default memo(ArticlesPage)
