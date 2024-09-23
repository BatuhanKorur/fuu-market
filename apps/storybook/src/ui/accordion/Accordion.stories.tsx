import { type Meta, type StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@fuu/ui'

const meta: Meta<typeof Accordion> = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const Default: Story = {
  render: () => (
    <Accordion type="single">
      <AccordionItem value="val1">
        <AccordionTrigger>
          <div>Accordion Item 1</div>
        </AccordionTrigger>
        <AccordionContent>
          <p>Hello World</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
