import '@/assets/styles.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Routes from './router'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes} />
    </QueryClientProvider>
  )
}

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <Toaster />
      <App />
    </StrictMode>,
  )
