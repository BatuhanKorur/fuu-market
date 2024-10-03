import { ReactNode } from 'react'
import { cx } from '@/app'

interface PageProps {
  title: string
  children: ReactNode
  containerClassName?: string
  headingRight?: ReactNode
  loading?: boolean
}

export function Page({ title, children, containerClassName, headingRight, loading = false }: PageProps) {
  return (
    <div className={cx('px-8 py-6 flex flex-col grow', containerClassName)}>
      <div className="flex items-end justify-between mb-4">
        <h1 className="text-4xl font-[525] tracking-[0.4px] mb-2 leading-none">{ title }</h1>
        { headingRight }
      </div>
      { loading
        ? (
            <div className="grow bg-muted animate-pulse rounded-md shadow-md flex-center"></div>
          )
        : (children) }
    </div>
  )
}
