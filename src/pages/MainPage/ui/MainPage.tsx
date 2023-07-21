import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')
    const onchange = (value: string) => {
        setValue(value)
    }
    return (
        <div style={{ color: 'red' }}>
            <BugButton />
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
