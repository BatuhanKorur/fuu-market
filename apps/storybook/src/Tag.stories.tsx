import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagVariants } from '@fuu/ui'

const meta = {
  title: 'UI/Tag',
  component: Tag,
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
        type: 'Select',
      },
    },
  },
} satisfies Meta<typeof Tag>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
  },
}
