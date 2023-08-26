import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { BsBookmarks, BsCardList } from 'react-icons/bs'


function Sidenavbar() {
    return (

        <div className=' flex flex-col space-y-6 py-20  w-1/5 pb-[130px] bg-blue-950'>
            <div className='ml-8 flex w-auto  border-b-2 border-b-slate-700 py-4 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <CgProfile className=' w-7 h-7' />
                </div>
                <div className='pl-3  text-lg font-bold '>Add Students</div>
            </div>
            <div className='ml-8 flex w-auto  border-b-2 border-b-slate-700 py-4 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <BsCardList className=' w-7 h-7' />
                </div>
                <div className='pl-3  text-lg font-bold '>Add Ads</div>
            </div>
            <div className='ml-8 flex w-auto  border-b-2 border-b-slate-700 py-4 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <BsBookmarks className=' w-7 h-7' />
                </div>
                <div className='pl-3  text-lg font-bold '>Saved Ads</div>
            </div>
            <div className='ml-8 flex w-auto  border-b-2 border-b-slate-700 py-4 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <CgProfile className=' w-7 h-7' />
                </div>
                <div className='pl-3  text-lg font-bold '>Messages</div>
            </div>
            <div className='ml-8 flex w-auto  border-b-2 border-b-slate-700 py-4 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <CgProfile className=' w-7 h-7' />
                </div>
                <div className='pl-3  text-lg font-bold '>my plans</div>
            </div>
            <div className='ml-8 flex w-auto  border-b-2 border-b-slate-700 py-4 px-4 hover:rounded-l-full text-white hover:text-black hover:bg-white border-slate-500 '>
                <div className=''>
                    <CgProfile className=' w-7 h-7' />
                </div>
                <div className='pl-3  text-lg font-bold '>Settings</div>
            </div>


        </div>
    )
}

export default Sidenavbar
