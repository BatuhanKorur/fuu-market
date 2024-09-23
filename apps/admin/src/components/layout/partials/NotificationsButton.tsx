import { Sheet, SheetTrigger, SheetContent, Button } from '@fuu/ui'
import { Bell } from '@phosphor-icons/react'
export function NotificationsButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button color="ghost" icon="only">
          <Bell />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-bold">Notifications</h3>
          <div className="p-4 bg-muted rounded-md">
            <p className="text-sm text-muted">You have no new notifications.</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
