import React, { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { getUserInited, initAuthData } from '@/entities/User'
import { AppRouter } from './providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { PageLoader } from '@/widgets/PageLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'

const App = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!inited) {
        return <PageLoader />
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames('app_redesigned', [theme], {})}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            /* eslint-disable-next-line i18next/no-literal-string */
                            toolbar={<div>asd</div>}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', [theme], {})}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    )
}

export default App
