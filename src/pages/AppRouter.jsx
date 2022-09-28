import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main'
import Results from './Results'

const AppRouter = () => {
  return (
    <div>

        <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Main />} />
                    <Route path='/results' element={<Results />} />

                </Routes>
        
        
        </BrowserRouter>


    </div>
  )
}

export default AppRouter