import React, { useState, useRef } from "react";
import { AiOutlineCamera } from 'react-icons/ai'
import { addstudents } from "../services/Apiservices"
import { Toaster, toast } from 'react-hot-toast'
import avatar from '/images/avatar.png'



function Profile() {
  const image = useRef()
  const selectnationality = useRef()
  const selectcountryliving = useRef()
  const [name, setname] = useState('')
  const [dateofbirth, setdateofbirth] = useState('')
  const [email, setemail] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [nationality, setnationality] = useState('')
  const [country, setcountry] = useState('')
  const [secondarynumber, setsecondarynumber] = useState('')
  const [gender, setGender] = useState('')
  const [maritalstatus, setmaritalstatus] = useState('')
  const [images, setimages] = useState([])
  const [imagepreview, setImagePreview] = useState('')

  /////// checkbox ////

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setGender((prevSelected) => [...prevSelected, value]);
    } else {
      setGender((prevSelected) => prevSelected.filter(item => item !== value));
    }
  };

  const handlemaritalChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setmaritalstatus((prevSelected) => [...prevSelected, value]);
    } else {
      setmaritalstatus((prevSelected) => prevSelected.filter(item => item !== value));
    }
  };



  const Addstudent = async (e) => {
    e.preventDefault()
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      !name.trim() ||
      !email.trim() ||
      !dateofbirth.trim() ||
      !phonenumber.trim() ||
      !secondarynumber.trim() ||
      !selectcountryliving.current.value.trim() ||
      !selectnationality.current.value.trim() ||
      gender.length === 0 ||
      maritalstatus.length === 0 ||
      imagepreview === ''
    ) {
      toast.error('Please enter all fields');
    } else if (!email.match(emailRegex)) {
      toast.error('Please enter a valid email address');
    }
    else {
      const formdata = new FormData()
      formdata.append('image', images)
      formdata.append('name', name)
      formdata.append('dob', dateofbirth);
      formdata.append('phonenumber', phonenumber);
      formdata.append('secondarynumber', secondarynumber);
      formdata.append('country', country);
      formdata.append('nationality', nationality);
      formdata.append('gender', gender[0]);
      formdata.append('maritalstatus', maritalstatus[0]);
      formdata.append('email', email)
      for (const pair of formdata.entries()) {
        console.log(pair[0], pair[1], "PPPPPPPPPPPP");
      }
      const studentadd = await addstudents(formdata)
      if(studentadd.status){
        toast.success("Student added successfully")
        setname('')
        setdateofbirth('')
        setphonenumber('')
        setsecondarynumber('')
        setImagePreview('')
        setemail('')
        setmaritalstatus('')
        setGender('')
        setnationality('')
        setcountry('')
      }
      else{
        toast.error("Adding student unsuccessfull")
      }
    }
  }

  




  return (
    <div className=" flex flex-col pt-20 flex-grow ">
      <Toaster />
      <div className="flex  sm:justify-start  justify-center">
        <h1 className="font-sans pt-12 text-2xl font-bold sm:pl-10 md:pl-16 md:pb-8 capitalize text-gray-400">
          My profile
        </h1>
      </div>

      <form onSubmit={Addstudent} className="flex flex-col mx-4 sm:mx-0 sm:ml-16" action="">
        <div className="flex  flex-col-reverse sm:flex-row">
          <div className="flex flex-col space-y-3 ">
            {/* input tages */}
            <div className="relative md:w-96 ">
              <label htmlFor="" className="bg-white absolute top-3 left-3 px-2 font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
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
                value={dateofbirth}
                onChange={(e) => setdateofbirth(e.target.value)}
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
                value={email}
                onChange={(e) => setemail(e.target.value)}
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

              <img src={imagepreview?imagepreview:avatar} className=" bg-black rounded-full h-32 w-32" alt="" />
              <div className="bg-white absolute top-28 left-[52px] rounded-full w-6 h-6">
                <AiOutlineCamera onClick={() => image.current.click()} className=" cursor-pointer w-5 h-5 pl-1 text-black" />
                <input
                  className="hidden"
                  ref={image}
                  onChange={(e) => {
                    setimages(e.target.files[0]);
                    setImagePreview(URL.createObjectURL(e.target.files[0]));
                  }}
                  accept="image/*"
                  type="file"
                />
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
                  value={phonenumber}
                  onChange={(e) => setphonenumber(e.target.value)}
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
                  value={nationality}
                  ref={selectnationality}
                  onChange={(e) => setnationality(e.target.value)}
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
                  value={secondarynumber}
                  onChange={(e) => setsecondarynumber(e.target.value)}
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
                  value={country}
                  ref={selectcountryliving}
                  onChange={(e) => setcountry(e.target.value)}
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
                    value={'Male'}
                    checked={gender.includes('Male')}
                    onChange={handleCheckboxChange}
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
                    value={'Female'}
                    checked={gender.includes('Female')}
                    onChange={handleCheckboxChange}

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
                    value={'Others'}
                    checked={gender.includes('Others')}
                    onChange={handleCheckboxChange}

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
                    value={'Married'}
                    checked={maritalstatus.includes('Married')}
                    onChange={handlemaritalChange}

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
                    value={'Unmarried'}
                    checked={maritalstatus.includes('Unmarried')}
                    onChange={handlemaritalChange}
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
                    value={'Others'}
                    checked={maritalstatus.includes('Others')}
                    onChange={handlemaritalChange}

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
          <button type="submit" className="bg-blue-950 w-full sm:w-fit rounded-lg px-16 font-bold py-3 text-sm text-white">Update profile</button>
        </div>
      </form>
    </div>
  );

}

export default Profile
