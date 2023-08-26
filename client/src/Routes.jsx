import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/login'
import Home from './pages/Home'


function Routepage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Signup />}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
            </Routes>
        </div>
    )
}

export default Routepage
