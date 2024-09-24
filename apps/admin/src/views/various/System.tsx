import { Page } from '@/components'
import { Card, List, ListItem } from '@fuu/ui'

export default function System() {
  return (
    <Page title="System">
      <Card title="System Information" description="General information about system" contentClass="p-0">
        <List>
          <ListItem label="System">Intel CPU</ListItem>
          <ListItem label="System">Intel CPU</ListItem>
          <ListItem label="System">Intel CPU</ListItem>
        </List>
      </Card>
    </Page>
  )
}
