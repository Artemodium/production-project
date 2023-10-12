import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'select text',
    options: [
        { value: '112233', content: 'Первый пункт' },
        { value: '445566', content: 'Второй пункт' },
    ],
}
