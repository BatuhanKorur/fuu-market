import { toast } from 'react-hot-toast'
import { Time } from '@fuu/core'

const NotifyStyle = {
  backgroundColor: 'hsl(var(--muted))',
  color: 'hsl(var(--foreground))',
  minWidth: '240px',
}

const DefaultOptions = {
  duration: Time.seconds(5).toMs,
  position: 'top-center',
}

export const notify = (message: string) => {
  toast(message, {
    duration: Time.seconds(10).toMs,
    style: NotifyStyle,
  })
}
