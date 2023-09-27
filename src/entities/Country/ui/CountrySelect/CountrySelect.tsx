import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/Popups'
import { Country } from '../../model/types/Country'
import cls from './CountrySelect.module.scss'

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}
const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukrane, content: Country.Ukrane },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
]
export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props
    const { t } = useTranslation()

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange],
    )

    return (
        <ListBox
            className={cls.select}
            value={value}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    )
})
