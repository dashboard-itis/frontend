import React from 'react'

import ReactDOM from 'react-dom/client'

import { App } from './app/App'

import { ErrorBoundary, ErrorFallback } from '@/shared/ui/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
