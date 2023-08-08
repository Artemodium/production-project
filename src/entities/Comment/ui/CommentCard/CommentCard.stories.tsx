import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comment: {
        id: '1',
        text: 'hello? world',
        user: { id: '1', username: 'dsgs' },
    },
}

export const Loading = Template.bind({})
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
}