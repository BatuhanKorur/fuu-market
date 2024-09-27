import type { Meta, StoryObj } from '@storybook/react'
import { Toggle, Styles } from './Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'UI / Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  args: {
    ...Styles.defaultValues,
  },
  argTypes: {
    variant: {
      options: Object.keys(Styles.variants.variant),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.keys(Styles.variants.size),
      control: {
        type: 'select',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Toggle {...args} />,
}
