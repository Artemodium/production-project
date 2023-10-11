import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextTheme } from '@/shared/ui/depricated/Text'
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { getUserAuthData } from '@/entities/User'
import { AppLink, AppLinkTheme } from '@/shared/ui/depricated/AppLink'
import { HStack } from '@/shared/ui/depricated/Stack'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import cls from './Navbar.module.scss'
import { getRouteArticleCreate } from '@/shared/const/router'
import { ToggleFeatures } from '@/shared/lib/features'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, [], {})}
                    >
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(cls.Navbar, [], {})}>
                        <Text
                            className={cls.appName}
                            title={t('Ulbi TV App')}
                            theme={TextTheme.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.SECONDARY}
                            className={cls.createBtn}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        )
    }

    return (
        <header className={classNames(cls.Navbar, [], {})}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    )
})
