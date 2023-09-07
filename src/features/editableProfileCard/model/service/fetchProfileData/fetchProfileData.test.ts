import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { fetchProfileData } from './fetchProfileData'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Kazakhstan,
    lastname: 'Agr',
    first: 'gra',
    city: 'Ekb',
    currency: Currency.RUB,
}
describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toBe(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')
    })
})
