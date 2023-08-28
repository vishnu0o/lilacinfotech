import React from 'react'
import Navbar from '../components/Navbar1'
import Sidenavbar from '../components/Sidebar'
import Homepage from '../components/Profile'

function pageHome() {
    return (
        <div>
            <Navbar />
            <div className='flex '>
                <Sidenavbar />
                <Homepage />
            </div>
        </div>
    )
}

export default pageHome
