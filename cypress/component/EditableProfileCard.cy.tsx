import { EditableProfileCard }
    from '@/features/editableProfileCard'
import { TestProvider } from '@/shared/config/tests/componentRender/componentRender'

const UserID = '1'

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: UserID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={UserID} />
            </TestProvider>,
        )
    })
})
