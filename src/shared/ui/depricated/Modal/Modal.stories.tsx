import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio esse ipsam laudantium magnam omnis veritatis voluptas? Et, ipsa, quo.',
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio esse ipsam laudantium magnam omnis veritatis voluptas? Et, ipsa, quo.',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
