import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileFirstname } from './getProfileFirstname'

describe('getProfileFirstname.test', () => {
    test('should return valid data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'name',
                },
            },
        }
        expect(getProfileFirstname(state as StateSchema)).toEqual('name')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getProfileFirstname(state as StateSchema)).toEqual('')
    })
})
