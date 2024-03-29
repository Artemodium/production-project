import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

interface NoneClickableIconProps extends IconBaseProps {
    clickable?: false
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true
    onClick?: () => void
}

export type IconProps = NoneClickableIconProps | ClickableIconProps

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props

    const icon = (
        <Svg
            className={classNames(cls.Icon, [className], {})}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    )

    if (clickable) {
        return (
            <button
                className={cls.button}
                type="button"
                onClick={props.onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        )
    }

    return icon
})
