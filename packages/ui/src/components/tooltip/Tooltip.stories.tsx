import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tip: {
      description: 'Tooltip content',
      type: 'string',
      control: 'text',
    },
    delay: {
      description: 'Delay in milliseconds before the tooltip appears',
      type: 'number',
      control: 'number',
    },
    sideOffset: {
      description: 'Offset in pixels from the side of the trigger element',
      type: 'number',
      control: 'number',
    },
    side: {
      description: 'Side of the trigger element where the tooltip appears',
      type: 'string',
      options: ['top', 'right', 'bottom', 'left'],
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
    tip: 'Hello, world!',
  },
  render: ({ ...args }) => {
    return (
      <Tooltip {...args}>
        <button>Hover me</button>
      </Tooltip>
    )
  },
}
