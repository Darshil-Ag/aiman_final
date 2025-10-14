import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AdminProvider } from './contexts/AdminContext'
import { DataProvider } from './contexts/DataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AdminProvider>
  </StrictMode>,
)
