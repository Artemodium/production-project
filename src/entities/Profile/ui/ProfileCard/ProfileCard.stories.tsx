import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/avatar.png'
import { ProfileCard } from './ProfileCard'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Kazakhstan,
        lastname: 'Agr',
        first: 'gra',
        city: 'Ekb',
        currency: Currency.RUB,
        avatar,
    },
}

export const withError = Template.bind({})
withError.args = {
    error: 'true',
}

export const withLoading = Template.bind({})
withLoading.args = {
    isLoading: true,
}
