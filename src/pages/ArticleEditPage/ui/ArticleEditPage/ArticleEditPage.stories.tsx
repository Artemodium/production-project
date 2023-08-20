import type { ComponentMeta, ComponentStory } from '@storybook/react'
import 'app/styles/index.scss'
import ArticleEditPage from './ArticleEditPage'

export default {
    title: 'features/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
