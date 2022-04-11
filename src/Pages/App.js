import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../Router/Router'
import { Footer } from './Footer/Footer'

import '../Komponen/Css/App.css'

export const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}
