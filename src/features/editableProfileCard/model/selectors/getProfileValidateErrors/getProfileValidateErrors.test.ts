import { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileErrors } from '../../consts/consts'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors.test', () => {
    test('should return valid data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileErrors.INCORRECT_USER_DATA],
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ])
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
