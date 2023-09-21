import { selectByTestId } from '../../helpers/selectByTestId'

describe('empty spec', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.get('[data-testid=MainPage]').should('exist')
        })
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('MainPage')).should('exist')
        })
        it('Переход на не существующий маршрут', () => {
            cy.visit('/profile1')
            cy.get(selectByTestId('NotFoundPage')).should('exist')
        })
    })
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123')
        })
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('ProfilePage')).should('exist')
        })
        it('Переход на страницу со списком статей', () => {
            cy.visit('/articles')
            cy.get(selectByTestId('ArticlesPage')).should('exist')
        })
    })
})
