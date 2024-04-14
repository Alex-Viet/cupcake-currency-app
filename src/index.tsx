import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App tab="home" />)
} else {
  console.error('Container element not found.')
}
