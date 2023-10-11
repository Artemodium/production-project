import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
    value: 'OPEN',
    items: [
        { content: '123', value: '123' },
        { content: '1234', value: '1234' },
        { content: '12345', value: '12345' },
    ],
}

export const TopLeft = Template.bind({})
TopLeft.args = {
    value: 'OPEN',
    direction: 'top left',
    items: [
        { content: '123', value: '123' },
        { content: '1234', value: '1234' },
        { content: '12345', value: '12345' },
    ],
}

export const TopRight = Template.bind({})
TopRight.args = {
    value: 'OPEN',
    direction: 'top right',
    items: [
        { content: '123', value: '123' },
        { content: '1234', value: '1234' },
        { content: '12345', value: '12345' },
    ],
}

export const BottomRight = Template.bind({})
BottomRight.args = {
    value: 'OPEN',
    direction: 'bottom right',
    items: [
        { content: '123', value: '123' },
        { content: '1234', value: '1234' },
        { content: '12345', value: '12345' },
    ],
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
    value: 'OPEN',
    direction: 'bottom left',
    items: [
        { content: '123', value: '123' },
        { content: '1234', value: '1234' },
        { content: '12345', value: '12345' },
    ],
}
