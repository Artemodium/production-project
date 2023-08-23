import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from 'shared/ui/Stack'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { getAddCommentError, getAddCommentText } from '../../model/selectors/addCommentFormSelectors'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
}

export const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation()
    const text = useSelector(getAddCommentText)
    const error = useSelector(getAddCommentError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack justify="between" max className={classNames(cls.AddCommentForm, [className], {})}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
}

export default AddCommentForm
