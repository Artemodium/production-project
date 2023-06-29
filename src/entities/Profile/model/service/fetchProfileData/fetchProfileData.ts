import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../type/Profile'

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI
            try {
                const response = await extra.api.get<Profile>('/profile')
                console.log(response.data)
                return response.data
            } catch (e) {
                return rejectWithValue('error')
            }
        },
    )