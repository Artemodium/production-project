import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/ant-design_eye.svg'
import { Card } from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutPath } from 'shared/config/routeConfig/routeConfig'
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article'
import cls from './ArticleListItem.module.scss'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view } = props
    const { t } = useTranslation()
    const navigate = useNavigate()
    const onOpenArticle = useCallback(() => {
        navigate(RoutPath.articles_details + article.id)
    }, [article.id, navigate])
    const [isHover, bindHover] = useHover()
    const type = <Text text={article.type.join(', ')} className={cls.types} />
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlocks = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

        return (
            <div className={classNames(cls.ArticleListItem, [className, cls[view]], {})}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {type}
                    <img src={article.id} className={cls.img} alt={article.title} />
                    {textBlocks && (
                        <ArticleTextBlockComponent block={textBlocks} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
                            {t('Читать далее')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div {...bindHover} className={classNames(cls.ArticleListItem, [className, cls[view]], {})}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {type}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    )
}
