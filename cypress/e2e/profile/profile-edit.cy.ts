let profileId = ''

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login().then((data) => {
            profileId = data.id
            cy.visit(`profile/${data.id}`)
        })
    })
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test')
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it('Редактирование профиля пользователя', () => {
        const newFirstname = 'newFirst'
        const newLastname = 'newLast'
        cy.updateProfile(newFirstname, newLastname)
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname)
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname)
    })
})
