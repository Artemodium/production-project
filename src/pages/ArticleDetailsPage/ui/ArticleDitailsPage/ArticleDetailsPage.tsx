import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useDispatch, useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentByArticleId } from 'pages/ArticleDetailsPage'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { articleDetailsCommentsSliceReucer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
    className?: string
}

const reducersList: ReducerList = {
    articleDetailsComments: articleDetailsCommentsSliceReucer,
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article')
    const { id } = useParams<{id: string}>()
    const dispatch = useDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, [className], {})}>
                {t('Статья не найдена')}
            </div>
        )
    }
    return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, [className], {})}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>

    )
}

export default memo(ArticleDetailsPage)
