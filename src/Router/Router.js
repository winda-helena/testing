import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailCard from '../Pages/Detailcard/DetailCard'
// import { Footer } from '../Pages/Footer/Footer'
import { Card } from '../Pages/HasilPencarian/Card'
// import { Header } from '../Pages/Header/Header'
import { Search } from '../Pages/Search/Search'

export const Router = () => {
  return (
    <div>
        {/* <Header/> */}

        <Routes>
            <Route path='/' element={<Search/>}></Route>
            <Route path='/car' element={<Card/>}></Route>
            <Route path='/car/:carId' element={<DetailCard/>}></Route>
        </Routes>
        {/* <Footer/> */}
    </div>
  )
}
