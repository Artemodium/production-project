import { memo, useCallback, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text'
import { AddCommentForm } from '@/features/addCommentForm'
import { CommentList } from '@/entities/Comment'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { VStack } from '@/shared/ui/Stack'
import { Loader } from '@/shared/ui/Loader'
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props
    const { t } = useTranslation()

    const dispatch = useDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id))
    })

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    return (
        <VStack
            gap="16"
            max
            className={classNames('', [className], {})}
        >
            <Text
                title={t('Комментарии')}
                size={TextSize.L}
            />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    )
})
