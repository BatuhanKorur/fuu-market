import { type Meta, type StoryObj } from '@storybook/react'
import { Avatar, AvatarStyles } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',

  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  args: {
    ...AvatarStyles.defaultVariants,
    src: 'https://www.gravatar.com/avatar/',
    alt: 'alt',
  },
  argTypes: {
    size: {
      options: Object.keys(AvatarStyles.variants.size),
      control: {
        type: 'select',
      },
    },
    type: {
      options: Object.keys(AvatarStyles.variants.type),
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
    src: 'https://www.gravatar.com/avatar/',
  },
}
