import type { Meta, StoryObj } from '@storybook/react'
import { FormItem } from './Form'
import { Input } from '../input/Input'

const meta: Meta<typeof FormItem> = {
  title: 'UI / Form',
  component: FormItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    children: <Input />,
  },
}

export const Error: Story = {
  args: {
    label: 'Label',
    children: <Input />,
    error: { message: 'Error message' },
  },
}
