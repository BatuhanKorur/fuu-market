import { type Meta, type StoryObj } from '@storybook/react'
import { Tag, TagVariants } from '@fuu/ui'

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: Object.keys(TagVariants.color),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.keys(TagVariants.size),
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
  },
}
