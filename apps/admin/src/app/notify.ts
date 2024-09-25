import { toast } from 'react-hot-toast'
import { time } from '@fuu/core'

const NotifyStyle = {
  backgroundColor: 'hsl(var(--muted))',
  color: 'hsl(var(--foreground))',
  minWidth: '240px',
}

const DefaultOptions = {
  duration: time.seconds(5).toMs,
  position: 'top-center',
}

export const notify = (message: string) => {
  toast(message, {
    duration: time.seconds(10).toMs,
    style: NotifyStyle,
  })
}
