import { createReduxStore, AppDispatch } from './config/store'
import { StoreProvider } from './ui/StoreProvider'

export type {
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
    ThunkConfig,
} from './config/StateSchema'

export { StoreProvider, createReduxStore }

export type { AppDispatch }
