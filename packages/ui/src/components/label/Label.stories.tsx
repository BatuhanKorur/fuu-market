import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'UI / Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Label Text',
  },
}
