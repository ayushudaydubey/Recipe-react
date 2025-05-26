import React from 'react'
import NavBar from './components/NavBar'
import MainRoutes from './routes/MainRoutes'


const App = () => {
  return (
    <div className='font-thin px-6  py-8  h-screen  bg-red-50 '>
      <NavBar />
      <MainRoutes  />

    </div>
  )
}

export default App