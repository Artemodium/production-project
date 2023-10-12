import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon } from './Icon'

export default {
    title: 'shared/redesigned/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>

// @ts-ignore
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Normal = Template.bind({})
Normal.args = {}
