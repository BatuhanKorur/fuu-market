import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonStyles } from '@fuu/ui'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {
    color: {
      options: Object.keys(ButtonStyles.variants.color),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.keys(ButtonStyles.variants.size),
      control: {
        type: 'select',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
