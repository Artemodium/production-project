import type { ComponentMeta, ComponentStory } from '@storybook/react'
import 'app/styles/index.scss'
import { ArticleDetailsPageHeader } from './AticleDetailsPageHeader'

export default {
    title: 'features/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
