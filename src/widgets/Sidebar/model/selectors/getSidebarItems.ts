import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/Profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import { SidebarItemType } from '../types/items'
import { RoutPath } from '@/shared/const/router'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
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
        ]
        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutPath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Ваш профиль',
                    authOnly: true,
                },
                {
                    path: RoutPath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            )
        }
        return sidebarItemList
    },
)
