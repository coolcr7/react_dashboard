import React, { useState } from 'react'
import { useContact,OpenProps } from '../context/OpenProvider';
import { GoChevronRight,GoGear,GoX,GoPlus } from "react-icons/go"
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const Menus = [
        { title: "Dashboard", icon: <GoChevronRight/>,src: "/dashboard"  },
        { title: "Contacts", icon: <GoChevronRight/>,src: "/"  },
    
      ];
    type Menu = {
        title: String,
        icon: React.ReactElement,
        gap?: boolean
        src: string
    }
    const OpenContext=useContact()
    const {open,openSidebar}=OpenContext as OpenProps
    const [select,setSelect]=useState(0)
    const handleClick=(index:number):void=>{
        setSelect(index)
    }
  return (
    <div>
       <div className={`transition-all  duration-700  fixed h-screen z-2 top-0 ${open ? 'left-0' : '-left-[100%]'}`}>
        <div className={`min-w-[200px] w-[20vw] bg-gray-700 h-screen p-5  pt-8 relative`}>
          <div className="flex gap-x-4 justify-between items-center">
    
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >
              Designer
            </h1>
             <button className={` cursor-pointer right-3 border-none  duration-200 ${!open ? "rotate-[405deg]":""} border-purple-950
      border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={openSidebar}>
            <GoX  className='h-12' style={{ color: 'white', borderStyle:"none" }}/> 
          </button>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu: Menu, index) => (
              <Link  key={index} to={Menu.src} onClick={()=>handleClick(index)}>
              <li
               
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-orange-500 text-gray-900 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === select ? "bg-lime-100 " : "bg-slate-500 "
                  } `}
              >
                {Menu.icon}
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
                </Link>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div>
      </div>
    </div>
  )
}
