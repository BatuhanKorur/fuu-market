export function DGError({ error }: { error: Error }) {
  return (
    <div className="bg-red-background grow rounded-md border shadow-sm p-10 text-foreground/90 text-base">
      {error.message}
    </div>
  )
}
