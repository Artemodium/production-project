import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Input } from 'shared/ui/input/Input'

const MainPage = () => {
    const { t } = useTranslation('main')
    const [value, setValue] = useState('')
    const onchange = (value: string) => {
        setValue(value)
    }
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    )
}

export default MainPage
