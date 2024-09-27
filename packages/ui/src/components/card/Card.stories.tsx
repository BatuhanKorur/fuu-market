import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'UI / Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  decorators: [Story =>
    <div style={{ width: '360px' }}>{Story()}</div>,
  ],
  argTypes: {
    title: {
      description: 'Yolo',
      type: 'string',
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Card {...args}>Card content</Card>,
}

export const WithTitle: Story = {
  render: args => <Card {...args}>Card content</Card>,
  args: {
    title: 'Card title',
    description: 'Some card description',
  },
}
