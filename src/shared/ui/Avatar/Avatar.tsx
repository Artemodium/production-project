import { CSSProperties, useMemo } from 'react'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage'
import errorUserIcon from '../../assets/icons/defaultUser.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
    fallbackInverted?: boolean
}

export const Avatar = ({
    className,
    src,
    alt,
    size = 100,
    fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {}

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    )

    const fallback = <Skeleton width={size} height={size} border="50%" />
    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            Svg={errorUserIcon}
            width={size}
            height={size}
        />
    )

    return (
        <AppImage
            fallBack={fallback}
            errorFallBack={errorFallback}
            className={classNames(cls.Avatar, [className], {})}
            style={styles}
            src={src}
            alt={alt}
        />
    )
}
