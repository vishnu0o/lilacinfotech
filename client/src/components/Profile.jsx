import React from "react";
import { AiOutlineCamera } from 'react-icons/ai'


function Profile() {
  return (
    <div className=" flex flex-col pt-20 flex-grow ">
      <div className="flex  sm:justify-start  justify-center">
        <h1 className="font-sans pt-12 text-2xl font-bold sm:pl-10 md:pl-16 md:pb-8 capitalize text-gray-400">
          My profile
        </h1>
      </div>

      <form className="flex flex-col mx-4 sm:mx-0 sm:ml-16" action="">
        <div className="flex  flex-col-reverse sm:flex-row">
          <div className="flex flex-col space-y-3 ">
            {/* input tages */}
            <div className="relative md:w-96 ">
              <label htmlFor="" className="bg-white absolute top-3 left-3 px-2 font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                placeholder="Enter your name"
                className="pl-4 shadow-sm placeholder:pl-[4px]  placeholder:text-sm border border-gray-300 w-full h-12 rounded-xl"
                type="text"
              />
            </div>
            {/*  */}
            <div className="relative md:w-96">
              <label htmlFor="" className="bg-white absolute top-3 left-3 px-2 font-semibold">
                Date of birth <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                placeholder="DD-MM-YYYY"
                className="pl-4 uppercase placeholder:pl-[4px]   text-gray-500 shadow-sm border placeholder:text-xs border-gray-300 w-full h-12 rounded-xl"
                type="date"
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="relative md:w-96 ">
              <label htmlFor="" className="bg-white absolute top-3 left-3 px-2 font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                placeholder="Email"
                className="pl-4 placeholder:text-sm shadow-sm  placeholder:pl-[4px]   border border-gray-300 w-full h-12 rounded-lg"
                type="text"
              />
            </div>
            {/*  */}
            {/* end */}
          </div>
          {/* image section */}
          <div className="  md:pl-10 flex justify-center sm:justify-start py-3 sm:py-0 md:pt-6 ">
            <div className="relative">

              <img src="images/avatar.png" className=" bg-black rounded-full h-32 w-32" alt="" />
              <div className="bg-white absolute top-28 left-[52px] rounded-full w-6 h-6">
                <AiOutlineCamera className="w-5 h-5 pl-1 text-black" />
              </div>
            </div>
          </div>
          {/* ------------------------------- */}
        </div>
        {/*  */}
        <div className="flex flex-col-reverse sm:flex-col ">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col  space-y-3 ">
              {/* input tages */}

              {/*  */}
              <div className="relative md:w-96 ">
                <label htmlFor="" className="bg-white absolute top-3 left-3 px-2 font-semibold">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  placeholder="Add Phone number"
                  className="pl-4 placeholder:text-sm placeholder:pl-[4px] border shadow-sm border-gray-300 w-full h-12 rounded-lg"
                  type="text"
                />
              </div>
              {/*  */}
              {/*  */}
              <div className="relative md:w-96 ">
                <label htmlFor="" className="bg-white font-semibold absolute top-3 left-3 px-2">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <br />
                <select
                  className="pl-4 border shadow-sm border-gray-300 w-full h-12 rounded-lg"
                >
                  <option value="" disabled selected className="text-gray-300">Choose Country</option>
                  <option value="india">India</option>
                  <option value="USA">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* gender */}

              {/*  */}
              {/* end */}
            </div>
            {/* secont section */}
            <div className="flex flex-col sm:pl-10 space-y-3 ">
              {/* input tages */}

              {/*  */}
              <div className="relative md:w-96 ">
                <label htmlFor="" className="bg-white absolute font-semibold top-3 left-3 px-2">
                  Secondary Phone Number <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  placeholder="Add Phone Number"
                  className="pl-4 placeholder:pl-[4px] placeholder:text-sm border shadow-sm border-gray-300 w-full h-12 rounded-lg"
                  type="text"
                />
              </div>
              {/*  */}
              <div className="relative md:w-96 ">
                <label htmlFor="" className="bg-white font-semibold absolute top-3 left-3 px-2">
                  Country of living <span className="text-red-500">*</span>
                </label>
                <br />
                <select
                  className="pl-4 border shadow-sm border-gray-300 w-full h-12 rounded-lg"
                >
                  <option value="" disabled selected className="text-gray-300">Choose Country</option>
                  <option value="india">India</option>
                  <option value="USA">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              {/*  */}

              {/*  */}
              {/* end */}
            </div>
          </div>
          {/* radio button */}
          <div className="flex flex-col md:flex-row md:pt-4">
            {/* 1 */}
            <div className=" flex flex-col relative md:w-96 ">
              <label htmlFor="" className="bg-white font-semibold absolute top-3 left-3 px-2">
                Gender<span className="text-red-500">*</span>
              </label>

              <div className="pl-3 pt-12 flex justify-start">
                <div className="flex space-x-1 px-2">
                  <input
                    className="border-gray-300 rounded-lg"
                    type="radio"
                    id="male"
                    name="gender"
                  />
                  <label className="capitalize text-gray-500" htmlFor="male">
                    Male
                  </label>
                </div>

                <div className="flex space-x-1 px-2">
                  <input
                    className="border-gray-300 rounded-lg"
                    type="radio"
                    id="female"
                    name="gender"

                  />
                  <label className="capitalize text-gray-500" htmlFor="female">
                    Female
                  </label>
                </div>

                <div className="flex space-x-1 px-2">
                  <input
                    className="border-gray-300 rounded-lg"
                    type="radio"
                    id="other"
                    name="gender"

                  />
                  <label className="capitalize text-gray-500" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>

            </div>
            {/* 2 */}
            <div className="relative hidden sm:block md:w-96 md:ml-10 ">
              <label htmlFor="" className="bg-white font-semibold absolute top-3  left-3 px-2">
                Marital Status <span className="text-red-500">*</span>
              </label>
              <div className=" pl-3 pt-12 flex justify-start ">
                <div className="flex space-x-1 px-2">
                  <input
                    placeholder="Name"
                    className=" placeholder border-gray-300   rounded-lg"
                    type="radio"
                    name="Matrital status"

                  />
                  <label className="capitalize text-gray-500" htmlFor="">married</label>
                </div>

                <div className="flex space-x-1 px-2">
                  <input
                    color="red"
                    placeholder="Name"
                    className=" placeholder border-gray-300   rounded-lg"
                    type="radio"
                    name="Matrital status"
                  />
                  <label className="capitalize text-gray-500" htmlFor="">
                    Unmarried
                  </label>
                </div>
                <div className="flex space-x-1 px-2">
                  <input
                    placeholder="Name"
                    className=" placeholder border-gray-300   rounded-lg"
                    type="radio"
                    name="Matrital status"

                  />
                  <label className="capitalize text-gray-500" htmlFor="">
                    other
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 pl-2 pb-2">
          <button className="bg-blue-950 w-full sm:w-fit rounded-lg px-16 font-bold py-3 text-sm text-white">Update profile</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
