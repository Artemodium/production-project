import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title',
    text: 'text',
}

export const SizeS = Template.bind({})
SizeS.args = {
    title: 'Title',
    text: 'text',
    size: TextSize.S,
}

export const SizeM = Template.bind({})
SizeM.args = {
    title: 'Title',
    text: 'text',
    size: TextSize.M,
}

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'Title',
    text: 'text',
    size: TextSize.L,
}

export const Error = Template.bind({})
Error.args = {
    title: 'Title',
    text: 'text',
    theme: TextTheme.ERROR,
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
    title: 'Title',
}

export const onlyText = Template.bind({})
onlyText.args = {
    text: 'text',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title',
    text: 'text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
    title: 'Title',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
    text: 'text',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
