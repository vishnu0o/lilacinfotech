import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from 'react-icons/cg'
import { BsBookmarks, BsCardList,BsMap } from 'react-icons/bs'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import {FiSettings } from 'react-icons/fi'
import {FcAbout} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
function MobileSidebar({Setmobile}) {
  const navigate = useNavigate()
  const list = [
    { item: "Add Account", icon: <CgProfile className="mx-2 w-7 h-7 text-pink-600" />, url:'/home' },
    { item: "All Students", icon: <BsBookmarks className="mx-2 w-7 h-7 text-pink-600"/>,url:'/students' },
    { item: "My Documents", icon: <BsCardList className="mx-2 w-7 h-7 text-pink-600" /> },
    { item: "My Application", icon: <BsMap className="mx-2 w-7 h-7 text-pink-600" /> },
    { item: "Saved", icon: <BiSolidMessageSquareDetail className="mx-2 w-7 h-7 text-pink-600" /> },
    { item: "Settings", icon: <FiSettings className="mx-2 w-7 h-7 text-pink-600" /> },
    { item: "About Us", icon: <FcAbout className="mx-2 w-7 h-7 text-pink-600" /> },
   
  ];

  const handleaction = (url)=>{
    navigate(url)
    Setmobile(false)
  }
  return (
    <div>
      <ul className="flex flex-col border-t-[1px] border-slate-300 h-fit overflow-scroll z-20">
        {list.map((item) => {
          return (
            <li onClick={()=>handleaction(item.url)} className="flex border-b-[1px] border-slate-300  py-3 items-center justify-between text-lg font-semibold">
              <span className="flex">
                {item.icon}
                <p>{item.item}</p>
              </span>
              <IoIosArrowForward className="mr-3" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileSidebar;
