let currentArticleId = ''

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it('Открывается содержимое статьи', () => {
        cy.getByTestId('ArticleDetailsInfo').should('exist')
    })
    it('Отображается список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })
    it('Доступна возможность оставить комментарий', () => {
        cy.getByTestId('ArticleDetailsInfo')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('Доступна возможность оставить рэйтинг', () => {
        cy.getByTestId('ArticleDetailsInfo')
        cy.getByTestId('ArticleRating').scrollIntoView()
        cy.setRate(5, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 5)
    })
})
