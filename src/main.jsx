import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import router from './Routes/Router';
import AuthProvider from './components/context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer></ToastContainer>
      <AuthProvider>
        <RouterProvider router={router} />,
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)


