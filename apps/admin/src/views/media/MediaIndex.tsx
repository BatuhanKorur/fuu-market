import { Page } from '@/components'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@fuu/ui'
import { MediaDetails } from '@/views/media/partials/MediaDetails.tsx'

const images = [
  'http://localhost:4000/storage/assets/auth-bg.avif',
  'http://localhost:4000/storage/assets/auth-bg.avif',
  'http://localhost:4000/storage/assets/auth-bg.avif',
  'http://localhost:4000/storage/assets/auth-bg.avif',
  'http://localhost:4000/storage/assets/auth-bg.avif',
  'http://localhost:4000/storage/assets/auth-bg.avif',
]
export default function MediaIndex() {
  return (
    <ResizablePanelGroup direction="horizontal" className="grow">
      <ResizablePanel>
        <Page title="Media">
          <div className="grid grid-cols-3">
            {images.map((src, i) => (
              <img key={i} src={src} alt={`Image ${i}`} className="w-full h-32 object-cover" />
            ))}
          </div>
        </Page>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel collapsible minSize={10} maxSize={30}>
        <MediaDetails />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
