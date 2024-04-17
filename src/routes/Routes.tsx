import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from '../pages/main/MainPage'
import { NotFoundPage } from '../pages/404/NotFound'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
