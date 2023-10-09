import React, { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { getUserInited , initAuthData } from '@/entities/User'
import { AppRouter } from './providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { PageLoader } from '@/widgets/PageLoader';


const App = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if(!inited) {
        return <PageLoader />
    }

    return (
        <div className={classNames('app', [theme], {})}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}

export default App
