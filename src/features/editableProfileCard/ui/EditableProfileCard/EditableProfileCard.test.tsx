import { componentRender } from 'shared/config/tests/componentRender/componentRender'
import { Profile } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { $api } from 'shared/api/api'
import { profileReducer } from '../../model/slice/ProfileSlice'
import { EditableProfileCard } from './EditableProfileCard'

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 45,
    currency: Currency.RUB,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin123',
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            form: profile,
            data: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
}

describe('features/EditableProfileCard', () => {
    test('Readonly mode is available', async () => {
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })
    test('Cancel button discard values', async () => {
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'safda')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'aasdff')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('safda')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('aasdff')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
    })

    test('Validation test failed', async () => {
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Validation test success', async () => {
        const mockPutRequest = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'qwerty')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutRequest).toHaveBeenCalled()
    })
})
