import React from 'react'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from './routes/Routes'
import './styles.css'

interface AppProps {
  tab: string
}

const App: React.FC<AppProps> = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
