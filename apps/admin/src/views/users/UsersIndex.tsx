import { Page, DataGrid } from '@/components'
import { UserColumns } from './user.cols'
import { Api, useQuery } from '@/app'
import { ApiRoutes } from '@fuu/types'
import { Button, Dialog, DialogContent, DialogTrigger, FormItem, Input } from '@fuu/ui'
import { UserCreateForm } from '@/views/users/UserCreateForm'
export default function UsersIndex() {
  const query = useQuery({
    queryKey: [ApiRoutes.USERS],
    queryFn: () => Api.get(ApiRoutes.USERS),
  })
  return (
    <Page
      title="Users"
      headingRight={(
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create User</Button>
          </DialogTrigger>
          <DialogContent title="My Dialog" description="Are you exactly sure?">
            <UserCreateForm />
          </DialogContent>
        </Dialog>
      )}
    >
      <DataGrid columns={UserColumns} query={query} />
    </Page>
  )
}
