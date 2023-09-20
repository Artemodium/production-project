import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/CounterSlice'

export const Counter = () => {
    const counterValue = useCounterValue()
    const { increment, decrement, add } = useCounterActions()
    const { t } = useTranslation()

    const handleIncrement = () => {
        increment()
    }

    const handleDecrement = () => {
        decrement()
    }

    const handleAddFive = () => {
        add(5)
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
            <Button onClick={handleAddFive} data-testid="addFive-btn">
                {t('increment five')}
            </Button>
        </div>
    )
}
