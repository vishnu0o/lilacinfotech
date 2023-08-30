import React from 'react'
import Navbar from '../components/Navbar1'
import Sidenavbar from '../components/Sidebar'
import Liststudents from '../components/Liststudents'

function Studentslist() {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Sidenavbar/>
        <Liststudents/>
      </div>
    </div>
  )
}

export default Studentslist
