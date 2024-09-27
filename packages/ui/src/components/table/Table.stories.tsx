import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, TableHeaderCell, TableBody, TableRow, TableCell } from './Table'

const meta: Meta<typeof Table> = {
  title: 'UI / Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  decorators: [Story => (
    <div style={{
      width: '360px',
      margin: '32px',
    }}
    >
      {Story()}
    </div>
  ),

  ],
  args: {},
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

const demoData = {
  headers: ['Name', 'Age', 'City'],
  rows: [
    ['John Doe', '30', 'New York'],
    ['Jane Doe', '25', 'Los Angeles'],
    ['John Smith', '40', 'Chicago'],
  ],
}
export const Default: Story = {
  render: () => {
    return (
      <Table>
        <TableHeader>
          { demoData.headers.map(header => (
            <TableHeaderCell key={header} sortable>{header}</TableHeaderCell>
          ))}
        </TableHeader>
        <TableBody>
          { demoData.rows.map((row, i) => (
            <TableRow key={i}>
              { row.map((cell, j) => (
                <TableCell key={j}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
