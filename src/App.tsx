import React from 'react'
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index'
import { AppRoutes } from './routes/Routes'
import './styles.css'

interface AppProps {
  tab: string
}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
