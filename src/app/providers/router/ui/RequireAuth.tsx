import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData } from 'entities/User'
import { RoutPath } from 'shared/config/routeConfig/routeConfig'

export function RequireAuth({ children }: {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RoutPath.main} state={{ form: location }} replace />
    }
    return children
}