import { Configs } from '@/app'
export const getAsset = (str: string) => {
  return `${Configs.STORAGE_PATH}/assets/${str}`
}
