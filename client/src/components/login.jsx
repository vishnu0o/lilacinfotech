import React from 'react'
import userAxios from '../Axios/user'

function login() {

    return (
        <div className="flex h-screen relative ">
            <div className="w-2/3 overflow-hidden ">
                <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('images/banner.png')" }}>
                    <div className='flex flex-col justify-end items-center h-screen py-40 bg-gradient-to-b from-transparent to-blue-950'>
                        <div className='text-white font-bold text-5xl'>Global Study Link</div>
                        <div className='text-white font-semibold text-lg pt-2'>Fastest growing education team</div>
                        <div className='flex pt-4 space-x-3'>
                            <input type='text' className='rounded-full  border-2 w-4 h-4 ' />
                            <input type='text' className='rounded-full bg-transparent  border-2 w-4 h-4 ' />
                            <input type='text' className='rounded-full bg-transparent border-2 w-4 h-4 ' />

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center pl-6 py-10 mx-5">
                <div>
                    <img className="w-20" src="images/logo1.png" alt="" />
                </div>
                <div className="font-bold text-3xl pt-10">Sign up</div>
                <div className="text-slate-400 text-left pt-2 font-semibold">
                    Create a GSL account using your email and password
                </div>
                <form action="" className="mt-4 space-y-4">

                    <label htmlFor="" className="bg-white font-bold">Email</label><br />
                    <input placeholder="Name" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="text" />


                    <label htmlFor="" className="bg-white font-bold">Password <span className="text-red-500">*</span></label><br />
                    <input placeholder="Email" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="password" />

                    <div className="flex justify-between ">
                        <div>
                            <input type="checkbox" />
                            <label className="pl-2 text-slate-400 font-semibold">Remember me</label>

                        </div>
                        <span className='items-end font-bold text-red-500'>Fogot password?</span>

                    </div>
                    <div className=''>

                        <button className="text-center w-full   bg-blue-950 text-white py-4 rounded-lg font-bold">Login</button>
                    </div>

                </form>

                <div className="flex-col pl-3 text-center pt-20">
                    <div className='font-semibold text-slate-400 text-sm'>By signing in, you agree to our</div>
                    <div><span className="text-red-500 font-bold underline text-sm">Terms & Conditions</span> and <span className="text-red-500 font-bold underline ">Privacy Policy</span></div>
                </div>

            </div>
        </div>


    )
}

export default login
