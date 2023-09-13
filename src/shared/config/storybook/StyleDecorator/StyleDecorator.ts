import { Story } from '@storybook/react'
// eslint-disable-next-line my-path-checker-plugin/layer-imports-checker
import '@/app/styles/index.scss'

export const StyleDecorator = (story: () => Story) => story()
