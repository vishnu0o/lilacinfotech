import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
function MobileSidebar({Setmobile}) {
  const list = [
    { item: "Profile", icon: <CgProfile className="mx-2 w-7 h-7" /> },
    { item: "My Qualification", icon: <CgProfile className="mx-2 w-7 h-7" /> },
    { item: "Profile", icon: <CgProfile className="mx-2 w-7 h-7" /> },
    { item: "My Qualification", icon: <CgProfile className="mx-2 w-7 h-7" /> },
    { item: "Profile", icon: <CgProfile className="mx-2 w-7 h-7" /> },
    { item: "My Qualification", icon: <CgProfile className="mx-2 w-7 h-7" /> },
    { item: "Profile", icon: <CgProfile className="mx-2 w-7 h-7" /> },
   
  ];
  return (
    <div>
      <ul className="flex flex-col border-t-[1px] border-slate-300 h-fit overflow-scroll z-20">
        {list.map((item) => {
          return (
            <li onClick={()=>Setmobile(false)} className="flex border-b-[1px] border-slate-300  py-3 items-center justify-between text-lg font-semibold">
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
