export const setRate = (starsCount = 5, feedback = 'feedback') => {
    cy.getByTestId(`ArticleRating.${starsCount}`).click()
    cy.getByTestId('ArticleRating.Input').type(feedback)
    cy.getByTestId('ArticleRating.Send').click()
}

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
