import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '@fuu/ui'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'sm',
    children: 'Button',
  },
}
