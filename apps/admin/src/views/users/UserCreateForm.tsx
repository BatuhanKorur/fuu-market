import { Button, FormItem, FormPassword, Input, InputMoney, InputPassword } from '@fuu/ui'
import { useForm, useZod } from '@/app'

const { zod } = useZod({})
const { schema, resolver } = useZod({
  firstName: zod.string().min(2, 'Name must be at least 2 characters'),
  lastName: zod.string(),
  password: zod.string(),
  money: zod.number(),
})

export const UserCreateForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver })
  const onSubmit = (data: any) => console.log(data)
  return (
    <div className="flex flex-col">
      <div>
        <FormItem label="First Name" error={errors.name}>
          <Input.Text {...register('firstName')} />
        </FormItem>
        <FormItem label="Last Name" error={errors.lastName}>
          <Input.Text {...register('lastName')} />
        </FormItem>
        <FormItem label="Password" error={errors.password}>
          <Input.Password {...register('password')} />
        </FormItem>
        <FormItem label="Password" error={errors.money}>
          <Input.Money {...register('money')} />
        </FormItem>
      </div>
      <div className="border-t -mx-6 px-6 pt-4 -mb-2 flex flex-row-reverse mt-6">
        <Button size="md" onClick={handleSubmit(onSubmit)}>Create</Button>
      </div>
    </div>
  )
}
