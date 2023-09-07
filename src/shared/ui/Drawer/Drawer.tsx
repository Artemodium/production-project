import { classNames, Mods } from 'shared/lib/classNames/classNames'
import React, { memo, ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { useModal } from '../../lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'
import { Portal } from '../Portal/Portal'

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
    } = props

    const { close, isClosing, isMounted } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    })
    const { theme } = useTheme()

    const mods: Mods = {
        [cls.opened]: isOpen,
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, [className, theme, 'app_drawer'], mods)}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
})
