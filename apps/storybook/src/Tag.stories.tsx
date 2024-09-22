import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from '@fuu/ui'
import { defaultMeta } from '@/utils'

const meta = {
  ...defaultMeta(Tag),
} satisfies Meta<typeof Tag>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
