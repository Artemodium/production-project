import { memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemList = useSelector(getSidebarItems)
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const itemList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemList])

    return (
        <aside
            data-testid="sidebar"
            className={
                classNames(
                    cls.Sidebar,
                    [className],
                    { [cls.collapsed]: collapsed },
                )
            }
        >
            <Button
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                { collapsed ? '>' : '<' }
            </Button>
            <VStack role="navigation" gap="8" className={cls.items}>
                {itemList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </aside>
    )
})
