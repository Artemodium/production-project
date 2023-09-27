import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'
import { StoreProvider } from '@/app/providers/StoreProvider'

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreProvider],
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = (args) => (
    <AdminPanelPage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
