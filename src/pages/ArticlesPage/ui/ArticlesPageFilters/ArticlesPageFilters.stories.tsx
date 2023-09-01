import type { ComponentMeta, ComponentStory } from '@storybook/react'
import 'app/styles/index.scss'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticlesPageFilters } from './ArticlesPageFilters'

export default {
    title: 'features/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
