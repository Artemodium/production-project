import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/Button'

interface BugButtonProps {
    className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)
    const throwError = () => {
        setError((prevState) => !prevState)
    }
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button
            onClick={throwError}
        >
            {t('Бросить ошибку')}
        </Button>
    )
}
