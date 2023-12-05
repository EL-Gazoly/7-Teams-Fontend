import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { LanguageProvider } from './contexts/LanguageContext.tsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HashRouter>
        <NextUIProvider>
          <LanguageProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </LanguageProvider>
        </NextUIProvider>
      </HashRouter>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
