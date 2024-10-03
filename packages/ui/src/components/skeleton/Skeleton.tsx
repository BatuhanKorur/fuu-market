import { cx } from '../../lib'
import { HTMLAttributes } from 'react'

export const Skeleton = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx('grow bg-muted animate-pulse rounded-md shadow', className)} {...props}>{children}</div>
}
