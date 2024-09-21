import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@fuu/ui'

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    square: false,
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/264905',
    alt: 'Avatar',
  },
}
