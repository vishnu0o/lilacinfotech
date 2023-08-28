import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { BsBookmarks, BsCardList,BsMap } from 'react-icons/bs'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import {FiSettings } from 'react-icons/fi'


function Sidenavbar() {
    return (
        <div className='hidden sm:block h-screen sm:w-1/12 lg:w-1/5 w-1/5'>
        <div className=' flex fixed h-screen flex-col space-y-3 py-20 sm:w-1/12 lg:w-1/5 w-1/5 pb-[140px] bg-blue-950'>
            <div className='sm:ml-2 lg:ml-8 flex w-auto mt-10  border-b-2 border-b-slate-700 py-3  px-4 hover:rounded-l-full  text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <CgProfile className=' w-7 h-7 text-pink-600' />
                </div>
                <div className='pl-3 sm:hidden lg:block text-lg font-bold  '>Add Students</div>
            </div>
            <div className='sm:ml-2 lg:ml-8 flex w-auto  border-b-2 border-b-slate-700 py-3 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <BsCardList className=' w-7 h-7 text-pink-600' />
                </div>
                <div className='pl-3 sm:hidden lg:block text-lg font-bold '>Add Ads</div>
            </div>
            <div className='sm:ml-2 lg:ml-8 flex w-auto  border-b-2 border-b-slate-700 py-3 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <BsBookmarks className=' w-7 h-7 text-pink-600' />
                </div>
                <div className='pl-3  text-lg font-bold sm:hidden lg:block '>Saved Ads</div>
            </div>
            <div className='sm:ml-2 lg:ml-8 flex w-auto  border-b-2 border-b-slate-700 py-3 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <BiSolidMessageSquareDetail className=' w-7 h-7 text-pink-600' />
                </div>
                <div className='pl-3  text-lg font-bold sm:hidden lg:block '>Messages</div>
            </div>
            <div className=' sm:ml-2 lg:ml-8 flex w-auto  border-b-2 border-b-slate-700 py-3 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <BsMap className=' w-7 h-7 text-pink-600' />
                </div>
                <div className='pl-3  text-lg font-bold sm:hidden lg:block'>my plans</div>
            </div>
            <div className=' sm:ml-2 lg:ml-8 flex w-auto  border-b-2 border-b-slate-700 py-3 px-4  hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <FiSettings className=' w-7 h-7 text-pink-600' />
                </div>
                <div className='pl-3  text-lg font-bold sm:hidden lg:block '>Settings</div>
            </div>


        </div>
        </div>
    )
}

export default Sidenavbar
