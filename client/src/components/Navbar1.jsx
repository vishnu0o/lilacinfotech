import React, { useState } from 'react'
import { RiArrowDownFill, RiArrowDropDownFill } from 'react-icons/ri';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import MobileSidebar from '../components/MobileSidebar';
function Navbar() {
    const [mobile,setmobile]=useState(false)
    return (
        <>
        <div className='w-full '>
            <div className='flex fixed z-10 w-full px-9 md:px-10  justify-between bg-white shadow-md h-20'>
                <img className='w-20' src="images/logo1.png" alt="" />
                <div className='flex items-center'>
                <div className=' hidden sm:flex justify-center items-center space-x-3'>
                    <div className='flex'>
                        <div className='text-slate-400 font-semibold'>Courses </div>
                        <div className='pt-1'>
                            <RiArrowDropDownFill className='w-5 h-5' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='text-slate-400 font-semibold'>Universities </div>
                        <div className='pt-1'>
                            <RiArrowDropDownFill className='w-5 h-5' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='text-slate-400 font-semibold'>Services </div>
                        <div className='pt-1'>
                            <RiArrowDropDownFill className='w-5 h-5' />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='text-slate-400 font-semibold '>Products </div>
                        <div className='pt-1'>
                            <RiArrowDropDownFill className='w-5 h-5' />
                        </div>
                    </div>
                    <div className='pl-5'>
                    <img class="h-10 w-10 hidden sm:block rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>

                    </div>
                    </div>
                    <div className='pl-5 md:hidden'>
                    {!mobile ? (

                        <AiOutlineMenu className='h-8 w-8' onClick={()=>setmobile(!mobile)} />
                    ):  <AiOutlineClose className='h-8 w-8' onClick={()=>setmobile(!mobile)} /> 
                    }
                    </div>

                </div>
               
            </div>
        </div>
        <div className={ `${mobile?'h-screen transition-all  duration-200 w-full':'h-screen transition-all duration-500  w-0'}  overflow-scroll fixed top-20 z-10 bg-white`}>
        <MobileSidebar Setmobile={setmobile} />
      </div>
       
        </>
    )
}

export default Navbar
