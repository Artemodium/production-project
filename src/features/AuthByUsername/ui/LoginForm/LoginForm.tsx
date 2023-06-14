import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './LoginForm.module.scss'
import { loginActions } from '../../model/slice/LoginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, { }, [className])}>
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
    )
})
