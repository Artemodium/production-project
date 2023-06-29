import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/input/Input'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import cls from './LoginForm.module.scss'
import { loginActions, loginReducer } from '../../model/slice/LoginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager
    const username = useSelector(getLoginUserName)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, username, password])

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.LoginForm, [className], { })}>
                <Text title={t('Форма авторизации')} />
                { error && <Text theme={TextTheme.ERROR} text={t('Ошибка')} /> }
                <Input
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите имя пользователя')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
