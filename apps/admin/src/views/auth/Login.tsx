import { Configs } from '@/app'
export default function Login() {
  return (
    <main
      className="min-h-svh w-full h-full dark"
      style={{
        backgroundImage: `url(${Configs.STORAGE_PATH}/assets/auth-bg.avif)`,
        backgroundSize: 'cover',
      }}
    >
      <div className="min-h-svh flex items-center justify-center bg-black/75">
        <div className="w-96 p-8 rounded-lg shadow-lg bg-black/30 backdrop-blur-2xl">

        </div>
      </div>
    </main>
  )
}
