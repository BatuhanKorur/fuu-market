import { Page, DataTable } from '@/components'
import { UserColumns } from './user.cols'
import { Api, useQuery } from '@/app'
import { ApiRoutes } from '@fuu/types'
export default function UsersIndex() {
  const query = useQuery({
    queryKey: [ApiRoutes.USERS],
    queryFn: () => Api.get(ApiRoutes.USERS),
  })
  return (
    <Page title="Users">
      <DataTable columns={UserColumns} query={query} />
    </Page>
  )
}
