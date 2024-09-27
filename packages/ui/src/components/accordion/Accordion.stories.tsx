import { type Meta, type StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from './Accordion'

const meta: Meta<typeof Accordion & typeof AccordionTrigger> = {
  title: 'UI/Accordion',
  parameters: {
    layout: 'centered',
  },
  decorators: [Story => <div style={{ width: '480px' }}>{Story()}</div>],
  argTypes: {
    showCaret: {
      control: {
        type: 'boolean',
      },
    },
    // @ts-ignore
    collapsible: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const DemoData = {
  'Accordion 1': 'The rotate of a bolt becomes a yarer turkey. We know that the literature would have us believe that an elfish dentist is not but an atom. The literature would have us believe that a shaping flugelhorn is not but a death. If this was somewhat unclear, they were lost without the tourist cougar that composed their sailor.',
  'Accordion 2': 'However, an example sees a rule as a pliant hoe. We can assume that any instance of a rhythm can be construed as a backless vegetarian. Authors often misinterpret the development as a freer event, when in actuality it feels more like a strangest fifth.',
  'Accordion 3': 'In ancient times a pedal thunderstorm is a trial of the mind. An abused silver\'s plane comes with it the thought that the trothless children is a priest.',
}

export const Default: Story = {
  args: {
    collapsible: true,
    showCaret: true,
  },
  render: function Render({ collapsible, showCaret }) {
    return (
      <Accordion type="single" collapsible={collapsible}>
        { Object.entries(DemoData).map(data => (
          <AccordionItem key={data[0]} value={data[0]}>
            <AccordionTrigger showCaret={showCaret}>
              <p>{data[0]}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p>{ data[1] }</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  },
}

export const Multiple: Story = {
  args: {
    showCaret: true,
  },
  render: function Render({ showCaret }) {
    return (
      <Accordion type="multiple">
        { Object.entries(DemoData).map(data => (
          <AccordionItem key={data[0]} value={data[0]}>
            <AccordionTrigger showCaret={showCaret}>
              <p>{data[0]}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p>{ data[1] }</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  },
}
