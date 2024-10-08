import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './frontend/routes/Routes'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className=' container mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>,
)
