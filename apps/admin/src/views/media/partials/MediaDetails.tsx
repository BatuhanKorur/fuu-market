import { InputCopy } from '@/components/InputCopy.tsx'
import { Label, Button, Input, Tooltip } from '@fuu/ui'
import { ArrowSquareOut, DownloadSimple } from '@phosphor-icons/react'
import { useForm, useZod, zod } from '@/app'
export function MediaDetails() {
  const { schema, resolver } = useZod({
    name: zod.string(),
    altText: zod.string(),
  })
  const { register, formState: { isValid } } = useForm({ resolver })
  return (
    <div>
      <div className="m-2 h-72 flex flex-col">
        <div className="grow flex-center">
          <img src="http://localhost:4000/storage/assets/auth-bg.avif" className="mx-auto" />
        </div>
        <div className="grid grid-cols-2 gap-x-1.5">
          <Button color="secondary">
            View
            <ArrowSquareOut size={20} className="ml-2 pb-px" />
          </Button>
          <Button color="secondary">
            Download
            <DownloadSimple size={20} className="ml-2 pb-px" />
          </Button>
        </div>
      </div>
      <div className="border-t p-3.5">
        <p className="text-lg font-semibold mb-2">auth-bg.jpg</p>
        <div className="space-y-3">
          {/* <div> */}
          {/*  /!* <TextLabel>URL</TextLabel> *!/ */}
          {/*  <Tooltip tip="Copy URL"> */}
          {/*    <InputCopy value="http://localhost:4000/storage/assets/very-long-path-auth-bg.avif" /> */}
          {/*  </Tooltip> */}
          {/* </div> */}
          {/* <FormField label="Name"> */}
          {/*  <Input {...register('name')} /> */}
          {/* </FormField> */}
          {/* <FormField label="Alt Text"> */}
          {/*  <Input /> */}
          {/* </FormField> */}
          <div className="flex space-x-8">
            {/* <TextStack label="Format">JPG</TextStack> */}
            {/* <TextStack label="Size">1.2 Mb</TextStack> */}
          </div>
          {/* <TextStack label="Dimensions">1920x1080</TextStack> */}
          {/* <TextStack label="Uploaded at">Hello</TextStack> */}
          {/* <TextStack label="Updated at">WHats up</TextStack> */}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button size="lg" color="secondary" disabled={!isValid} className="col-span-2">Save Changes</Button>
          <Button size="lg" className="col-span-2">Delete</Button>
        </div>
      </div>
    </div>
  )
}
