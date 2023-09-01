import { CounterSchema } from './model/types/counterSchema'
import { counterReducer } from './model/slice/CounterSlice'
import { Counter } from './ui/Counter'

export {
    counterReducer,
    Counter,
}

export type {
    CounterSchema,
}
