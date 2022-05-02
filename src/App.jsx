import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { Addcontact } from './components/Addcontact'
import { Edit } from './components/Edit'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
function App() {
 

  return (
    <div className="App">
      <ToastContainer/>
     <Navbar></Navbar>
     
      <Routes>
      <Route exact path='/' element={<Home></Home>}>
      
      </Route>
      <Route path='/add' element={<Addcontact></Addcontact>}>
  
      </Route>
      <Route path='/edit/:id' element={<Edit></Edit>}>
  
      </Route>

      </Routes>

    </div>
  )
}

export default App
