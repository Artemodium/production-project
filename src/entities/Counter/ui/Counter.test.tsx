import { screen } from '@testing-library/react'
// import { userEvent } from '@storybook/testing-library'
import { componentRender } from '@/shared/config/tests/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
    test('Test value title', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
    // test('Test increment', () => {
    //     componentRender(<Counter />, {
    //         initialState: { counter: { value: 10 } },
    //     })
    //     userEvent.click(screen.getByTestId('increment-btn'))
    //     expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    // })
    // test('Test decrement', () => {
    //     componentRender(<Counter />, {
    //         initialState: { counter: { value: 10 } },
    //     })
    //     userEvent.click(screen.getByTestId('decrement-btn'))
    //     expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    // })
})
