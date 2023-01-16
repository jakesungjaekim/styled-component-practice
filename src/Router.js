import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import PracticeOne from './01-01-practice/PracticeOne'
import PracticeTwo from './01-02-dynamic-styled/PracticeTwo'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/01-01-practice' element={<PracticeOne/>}/>
        <Route path='/01-02-practice' element={<PracticeTwo/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router