import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/depricated/Text'
import { Avatar } from '@/shared/ui/depricated/Avatar'
import { Skeleton } from '@/shared/ui/depricated/Skeleton'
import { AppLink } from '@/shared/ui/depricated/AppLink'
import { VStack } from '@/shared/ui/depricated/Stack'
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'
import { getRouteProfile } from '@/shared/const/router'

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack
                data-testid="CommentCard.Loading"
                gap="8"
                max
                className={classNames(
                    cls.CommentCard,
                    [className, cls.loading],
                    {},
                )}
            >
                <div className={cls.header}>
                    <Skeleton width={50} border="50%" />
                    <Skeleton
                        height={16}
                        width={100}
                        className={cls.username}
                    />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack
            data-testid="CommentCard.Content"
            gap="8"
            max
            className={classNames(cls.CommentCard, [className], {})}
        >
            <AppLink
                className={cls.header}
                to={getRouteProfile(comment.user.id)}
            >
                {comment?.user.avatar ? (
                    <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text className={cls.username} title={comment?.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </VStack>
    )
})
