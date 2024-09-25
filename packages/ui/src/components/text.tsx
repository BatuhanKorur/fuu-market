import { ReactNode } from 'react'

export const TextLabel = ({ children }: {
  children: ReactNode
}) => {
  return (
    <p className="text-xs pb-0.5 font-[450] text-muted-foreground tracking-[0.1px]">{children}</p>
  )
}

export const TextStack = ({ label, children }: {
  label: string
  children: ReactNode
}) => {
  return (
    <div className="flex flex-col -space-y-0.5">
      <TextLabel>{ label }</TextLabel>
      <p className="text-base">{children}</p>
    </div>
  )
}
