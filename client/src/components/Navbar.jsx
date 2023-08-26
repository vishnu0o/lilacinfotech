import React from 'react'
import { RiArrowDownFill, RiArrowDropDownFill } from 'react-icons/ri';

function Navbar() {
    return (
        <div>
            <div className='flex px-10 py-3 justify-between bg-white shadow-md h-fit'>
                <img className='w-20' src="images/logo1.png" alt="" />
                <div className='flex  justify-center items-center space-x-3'>
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
                        <img className='w-16 h-12' src="images/profile.jpg" alt="" />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
