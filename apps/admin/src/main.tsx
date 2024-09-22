import '@/assets/styles.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Routes from './router'

const App = () => {
  return <RouterProvider router={Routes} />
}

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
