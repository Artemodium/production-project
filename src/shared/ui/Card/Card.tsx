import { useTranslation } from 'react-i18next'
import { HTMLAttributes, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string
    children: ReactNode
    theme?: CardTheme
    max?: boolean
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props
    const { t } = useTranslation()

    return (
        <div
            className={classNames(cls.Card, [className, cls[theme]], { [cls.max]: max })}
            {...otherProps}
        >
            {children}
        </div>
    )
}
