import type { Meta, StoryObj } from '@storybook/react'
import { Command } from '@fuu/ui'

const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
