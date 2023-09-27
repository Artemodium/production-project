import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileErrors } from '../../consts/consts'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Kazakhstan,
    lastname: 'Agr',
    first: 'gra',
    city: 'Ekb',
    currency: Currency.RUB,
}

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })
    test('error without first & lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
    })
    test('error incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined })
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE])
    })
    test('error incorrect Country', async () => {
        const result = validateProfileData({ ...data, country: undefined })
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY])
    })
    test('error multiply incorrect values', async () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ])
    })
})
