import { ReactNode } from 'react'
import { cx } from '@/app'

interface PageProps {
  title: string
  children: ReactNode
  containerClassName?: string
}

export function Page({ title, children, containerClassName }: PageProps) {
  return (
    <div className={cx('px-8 py-6', containerClassName)}>
      <h1 className="text-4xl font-[525] tracking-[0.4px] mb-2">{ title }</h1>
      <div>
        {children}
      </div>
    </div>
  )
}
