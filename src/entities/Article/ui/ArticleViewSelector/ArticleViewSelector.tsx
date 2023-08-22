import { classNames } from 'shared/lib/classNames/classNames'
import TiledIcon from 'shared/assets/icons/fe_tiled.svg'
import ListIcon from 'shared/assets/icons/bi_list.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleView } from '../../../Article'
import cls from './ArticleViewSelector.module.scss'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
]

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, [className], {})}>
            {viewTypes.map((viewTypes) => (
                <Button
                    key={viewTypes.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewTypes.view)}
                >
                    <Icon
                        Svg={viewTypes.icon}
                        className={classNames('', [], { [cls.notSelected]: viewTypes.view !== view })}
                    />
                </Button>
            ))}
        </div>
    )
}
