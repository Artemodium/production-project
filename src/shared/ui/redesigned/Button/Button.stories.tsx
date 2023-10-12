import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
}

export const ClearM = Template.bind({})
ClearM.args = {
    children: 'Text',
    variant: 'clear',
    size: 'm',
}

export const ClearL = Template.bind({})
ClearL.args = {
    children: 'Text',
    variant: 'clear',
    size: 'l',
}

export const ClearXL = Template.bind({})
ClearXL.args = {
    children: 'Text',
    variant: 'clear',
    size: 'xl',
}

export const OutlineM = Template.bind({})
OutlineM.args = {
    children: 'Text',
    variant: 'outline',
    size: 'm',
}

export const OutlineL = Template.bind({})
OutlineL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'l',
}

export const OutlineXL = Template.bind({})
OutlineXL.args = {
    children: 'Text',
    variant: 'outline',
    size: 'xl',
}
