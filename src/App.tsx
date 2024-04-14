import React from 'react'
import { MainPage } from './pages/main/Main'

interface AppProps {
  tab: string
}

const App: React.FC<AppProps> = () => {
  return <MainPage />
}

export default App
