import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@fuu/ui'
import { Sun } from '@phosphor-icons/react'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'ghost', 'outlined'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    icon: {
      options: ['none', 'only'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'md',
    children: 'Button Text',
  },
}

export const IconOnly: Story = {
  args: {
    color: 'primary',
    size: 'md',
    icon: 'only',
    children: <Sun />,
  },
/*  render: args => (
    <Button {...args}>
      <Sun />
    </Button>
  ), */
}
