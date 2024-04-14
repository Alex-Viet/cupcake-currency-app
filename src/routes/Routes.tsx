import React from 'react'
import { Routes, Route } from '../../node_modules/react-router-dom/dist/index'
import { MainPage } from '../pages/main/MainPage'
import { NotFoundPage } from '../pages/404/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>

      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}
