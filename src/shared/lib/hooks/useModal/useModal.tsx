import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react'
import { Mods } from '../../../lib/classNames/classNames'
import cls from '../../../ui/Modal/Modal.module.scss'

interface UseModalProps {
    onClose?: () => void
    isOpen?: boolean
    lazy?: boolean
    animationDelay: number
}

export function useModal(props: UseModalProps) {
    const {
        onClose, isOpen, animationDelay,
    } = props
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, animationDelay)
        }
    }, [animationDelay, onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close()
        }
    }, [close])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }
    return {
        isClosing,
        isMounted,
        close,
    }
}
