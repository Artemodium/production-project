import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginUserName } from './getLoginUserName'

describe('getLoginUserName.test', () => {
    test('should return Username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Username',
            },
        }
        expect(getLoginUserName(state as StateSchema)).toEqual('Username')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUserName(state as StateSchema)).toEqual('')
    })
})
