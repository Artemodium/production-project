import type { ComponentMeta, ComponentStory } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { StoreProvider } from '@/app/providers/StoreProvider'

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreProvider],
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <ArticleEditPage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
