import { type Meta, type StoryObj } from '@storybook/react'
import { Button, ButtonVariants } from '@fuu/ui'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: Object.keys(ButtonVariants.color),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.keys(ButtonVariants.size),
      control: {
        type: 'select',
      },
    },
    icon: {
      options: Object.keys(ButtonVariants.icon),
      control: {
        type: 'select',
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Button Text',
  },
}
