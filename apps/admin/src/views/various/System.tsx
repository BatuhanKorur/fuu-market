import { Page } from '@/components'
import { Card, List, ListItem } from '@fuu/ui'
import { Api, useQuery } from '@/app'
import { ApiRoutes } from '@fuu/types'

export default function System() {
  const details = useQuery({
    queryKey: [ApiRoutes.SYSTEM_DETAILS],
    queryFn: async () => {
      return await Api.get(ApiRoutes.SYSTEM_DETAILS)
    },
  })

  if (details.isLoading) return <div></div>
  if (details.isError) return <div>Error</div>
  const dd = details.data
  console.log(dd)
  return (
    <Page title="System">
      <Card title="Server Information" description="General information about system" contentClass="p-0">
        <List>
          <ListItem label="Type">{details.data.type}</ListItem>
          <ListItem label="Platform">{details.data.platform}</ListItem>
          <ListItem label="Timezone">{details.data.timezone}</ListItem>
          <ListItem label="Port">{details.data.port}</ListItem>
          <ListItem label="Node Version">{details.data.nodeVersion}</ListItem>
          <ListItem label="Server Version">{details.data.version}</ListItem>
        </List>
      </Card>
    </Page>
  )
}
