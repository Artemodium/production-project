import React from 'react'
import { RoutPath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/Profile.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutPath.main,
        Icon: MainIcon,
        text: 'Главная страница',
    },
    {
        path: RoutPath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutPath.profile,
        Icon: ProfileIcon,
        text: 'ВАШ ПРОФИЛЬ',
        authOnly: true,
    },
]
