import React from 'react'
import Navbar from '../components/Navbar'
import Sidenavbar from '../components/Sidenavbar'
import Homepage from '../components/Home'

function pageHome() {
    return (
        <div>
            <Navbar/>
            <div className='flex '>
                <Sidenavbar/>
                <Homepage/>
            </div>
        </div>
    )
}

export default pageHome
