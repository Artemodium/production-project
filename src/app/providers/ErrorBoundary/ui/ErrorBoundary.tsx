import React, {
    ErrorInfo, ReactNode, Suspense,
} from 'react'
import { PageError } from '@/widgets/PageError'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: Boolean
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error:Error, info:ErrorInfo) {
        // You can also log the error to an error reporting service
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            )
        }
        return (
            // eslint-disable-next-line
            <>
                {children}
            </>
        )
    }
}

export default ErrorBoundary
