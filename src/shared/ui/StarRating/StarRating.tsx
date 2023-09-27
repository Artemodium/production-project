import { memo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '../Icon/Icon'
import cls from './StarRating.module.scss'
import StarIcon from '../../assets/icons/StarIcon.svg'

interface StarRatingProps {
    className?: string
    onSelect?: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, selectedStars = 0, size = 30 } = props

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount)
        }
    }

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0)
        }
    }

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount)
            setCurrentStarCount(starsCount)
            setIsSelected(true)
        }
    }

    return (
        <div className={classNames(cls.StarRating, [className], {})}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        [
                            currentStarCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                        { [cls.selected]: isSelected },
                    )}
                    width={size}
                    height={size}
                    Svg={StarIcon}
                    key={starNumber}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`ArticleRating.${starNumber}`}
                    data-selected={currentStarCount >= starNumber}
                />
            ))}
        </div>
    )
})
