import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { StoreProvider } from '@/app/providers/StoreProvider'

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreProvider],
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
