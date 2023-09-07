import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ValidateProfileErrors } from '../consts/consts'
import { updateProfileData } from '../service/updateProfileData/updateProfileData'
import {
    profileReducer,
    profileActions,
} from '../slice/ProfileSlice'
import {
    ProfileSchema,

} from '../types/editableProfileCardSchema'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Kazakhstan,
    lastname: 'Agr',
    first: 'gra',
    city: 'Ekb',
    currency: Currency.RUB,
}

describe('ProfileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true })
    })
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        })
    })
    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '' },
        }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '1234',
            }),
        )).toEqual({
            form: { username: '1234' },
        })
    })
    test('test updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileErrors.SERVER_ERROR],
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })
    test('test updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        })
    })
})
