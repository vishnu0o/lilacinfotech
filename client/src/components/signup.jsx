import React from 'react'
import userAxios from '../Axios/user'

function signup() {

    return (

        // <div className="flex flex-col lg:flex-row h-screen relative">
        //     <div className="lg:w-2/3 overflow-hidden">
        //         <div className="h-full bg-cover bg-center md:h-screen"  style={{ backgroundImage: "url('images/banner.png')" }}>
        //             <div className='flex flex-col md:justify-end  items-center h-screen md:py-40 bg-gradient-to-b from-transparent to-blue-950'>
        //                 <div className='text-white font-bold text-3xl  md:m-0  md:text-4xl'>Global Study Link</div>
        //                 <div className='text-white font-semibold text-sm md:text-lg md:pt-2'>Fastest growing education team</div>
        //                 <div className='flex pt-4 space-x-3'>
        //                     <input type='text' className='rounded-full  border-2 w-4 h-4 ' />
        //                     <input type='text' className='rounded-full bg-transparent  border-2 w-4 h-4 ' />
        //                     <input type='text' className='rounded-full bg-transparent border-2 w-4 h-4 ' />

        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="flex absolute bg-white z-20 md:static md:h-auto m-20 flex-col justify-center pl-6 md:py-10 md:mx-5 mx-12  lg:mx-0 lg:w-1/3">
        //         <div className='md:block hidden'>
        //             <img className="w-20" src="images/logo1.png" alt="" />
        //         </div>
        //         <div className="font-bold text-3xl pt-2 text-center md:text-left">Sign up</div>

        //         <div className="text-slate-400 text-left pt-2 "> 
        //             Create a GSL account using your email and password
        //         </div>
        //         <form action="" className="mt-4 w-fit space-y-2">
        //             <div className="relative md:w-96 ">
        //                 <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Name <span className="text-red-500">*</span></label><br />
        //                 <input placeholder="Name" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="text" />
        //             </div>
        //             <div className="relative md:w-96">
        //                 <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Email/Phone number <span className="text-red-500">*</span></label><br />
        //                 <input placeholder="Email" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="text" />
        //             </div>
        //             <div className="relative md:w-96">
        //                 <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Password <span className="text-red-500">*</span></label><br />
        //                 <input placeholder="Password" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="password" />
        //             </div>
        //             <div className="relative md:w-96">
        //                 <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Repeat Password <span className="text-red-500">*</span></label><br />
        //                 <input placeholder="Re-Password" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="password" />
        //             </div>
        //             <div className="flex">
        //                 <input type="checkbox" />
        //                 <div className="pl-2 text-slate-400 font-semibold my-2">I Accept all The <span className="text-red-500 font-semibold">Terms and Conditions</span></div>
        //             </div>
        //             <button className="text-center h-12 w-full pt-3 bg-blue-950 text-white py-4 rounded-lg font-bold">Signup</button>
        //             <div className="relative">
        //                 <img className="w-6 absolute top-4 left-20" src="images/google.png" alt="" />
        //                 <button className="text-center h-14 w-full pt-3 bg-white border-2 border-gray-300 shadow-sm text-gray-500 py-4 rounded-lg font-bold">Login with Google</button>
        //             </div>
        //         </form>
        //         <div className="flex pt-5">
        //             <input className="w-4 shadow-sm form-checkbox border border-blue-500" type="checkbox" />
        //             <div className="flex-col pl-3">
        //                 <div>By signing in, you agree to our</div>
        //                 <div><span className="text-red-500 font-semibold underline">Terms & Conditions</span> and <span className="text-red-500 font-semibold underline">Privacy Policy</span></div>
        //             </div>
        //         </div>
        //         <div className="w-full text-center pt-3">
        //             Already registered?<span className="text-red-500 font-semibold">Login Now</span>
        //         </div>
        //     </div>
        // </div>

        <div className="flex flex-col lg:flex-row h-screen relative">
        <div className="lg:w-2/3 overflow-hidden">
            <div className="h-full bg-cover bg-center md:h-screen"  style={{ backgroundImage: "url('images/banner.png')" }}>
                <div className='flex flex-col md:justify-end  items-center h-screen md:py-40 bg-gradient-to-b from-transparent to-blue-950'>
                    <div className='text-white font-bold text-3xl  md:m-0  md:text-4xl'>Global Study Link</div>
                    <div className='text-white font-semibold text-sm md:text-lg md:pt-2'>Fastest growing education team</div>
                    <div className='flex pt-4 space-x-3'>
                        <input type='text' className='rounded-full  border-2 w-4 h-4 ' />
                        <input type='text' className='rounded-full bg-transparent  border-2 w-4 h-4 ' />
                        <input type='text' className='rounded-full bg-transparent border-2 w-4 h-4 ' />

                    </div>
                </div>
            </div>
        </div>
        <div className="flex absolute bg-white    z-20 md:static md:h-auto m-20 flex-col justify-center pl-6 md:py-10 md:mx-5 ml-20 mr-20 lg:mx-0 lg:w-1/3">
            <div className='md:block hidden'>
                <img className="w-20" src="images/logo1.png" alt="" />
            </div>
            <div className="font-bold text-3xl pt-2 text-center md:text-left">Sign up</div>

            <div className="text-slate-400 text-left pt-2 "> 
                Create a GSL account using your email and password
            </div>
            <form action="" className="mt-4 md:p-0  p-4 w-fit space-y-2">
                <div className="relative md:w-96 ">
                    <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Name <span className="text-red-500">*</span></label><br />
                    <input placeholder="Name" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="text" />
                </div>
                <div className="relative md:w-96">
                    <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Email/Phone number <span className="text-red-500">*</span></label><br />
                    <input placeholder="Email" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="text" />
                </div>
                <div className="relative md:w-96">
                    <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Password <span className="text-red-500">*</span></label><br />
                    <input placeholder="Password" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="password" />
                </div>
                <div className="relative md:w-96">
                    <label htmlFor="" className="bg-white absolute top-3 left-3 px-2">Repeat Password <span className="text-red-500">*</span></label><br />
                    <input placeholder="Re-Password" className="pl-4 placeholder border-2 border-gray-300 w-full h-14 rounded-lg" type="password" />
                </div>
                <div className="flex">
                    <input type="checkbox" />
                    <div className="pl-2 text-slate-400 font-semibold my-2">I Accept all The <span className="text-red-500 font-semibold">Terms and Conditions</span></div>
                </div>
                <button className="text-center h-12 w-full pt-3 bg-blue-950 text-white py-4 rounded-lg font-bold">Signup</button>
                <div className="relative">
                    <img className="w-6 absolute top-4 left-20" src="images/google.png" alt="" />
                    <button className="text-center h-14 w-full pt-3 bg-white border-2 border-gray-300 shadow-sm text-gray-500 py-4 rounded-lg font-bold">Login with Google</button>
                </div>
            </form>
            <div className="flex pt-5">
                <input className="w-4 shadow-sm form-checkbox border border-blue-500" type="checkbox" />
                <div className="flex-col pl-3">
                    <div>By signing in, you agree to our</div>
                    <div><span className="text-red-500 font-semibold underline">Terms & Conditions</span> and <span className="text-red-500 font-semibold underline">Privacy Policy</span></div>
                </div>
            </div>
            <div className="w-full text-center pt-3">
                Already registered?<span className="text-red-500 font-semibold">Login Now</span>
            </div>
        </div>
    </div>

    )
}

export default signup
