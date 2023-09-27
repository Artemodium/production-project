import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/config/tests/componentRender/componentRender'
import AppRouter from './AppRouter'
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/const/router'
import { UserRole } from '@/entities/User'

describe('app/router/AppRouter', () => {
    test('Страница должна отрисоваться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        })
        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })
    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/sd',
        })
        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })
    test('Редирект не авторизованного пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        })
        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })
    test('Доступ авторизованного пользователя к закрытой странице', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        })
        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })
    test('Доступ запрещён, отстутствует роль', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        })
        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })
    test('Доступ разрешен', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        })
        const page = await screen.findByTestId('AdminPanelPage')
        expect(page).toBeInTheDocument()
    })
})
