import { RouteProps } from 'react-router-dom'
// eslint-disable-next-line my-path-checker-plugin/layer-imports-checker
import { UserRole } from '@/entities/User'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}
