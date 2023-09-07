import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import NotifyIcon from 'shared/assets/icons/NotifyIcon.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import {
    BrowserView, MobileView, isBrowser, isMobile,
} from 'react-device-detect'
import cls from './NotificationButton.module.scss'
// import isBrowser = ReactDeviceDetect.isBrowser
// import BrowserView = ReactDeviceDetect.BrowserView

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotifyIcon} inverted />
        </Button>
    )

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, [className], {})}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    )
})
