import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import Fevrouite from '../pages/Fevrouite'
import Create from '../pages/Create'
import Update from '../pages/Update'
import About from '../pages/About'


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/create' element={<Create />} />
           <Route path='/favourite' element={<Fevrouite />} />
              <Route path='/about' element={<About/>} />
      </Routes>


    </div>
  )
}

export default MainRoutes