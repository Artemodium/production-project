import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ForbiddenPage } from './ForbiddenPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />

export const Normal = Template.bind({})
Normal.args = {

}
