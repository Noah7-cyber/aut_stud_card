import React from 'react'
import {HiMenuAlt3} from "react-icons/hi"
import {MdOutlineDashboard} from "react-icons/md";
import {RiSettings4Line} from "react-icons/ri";
import {BsFillRocketFill} from "react-icons/bs"
import {AiOutlineUser, AiOutlineHeart} from "react-icons/ai";

import { useState } from "react";
import Update from './update';

const Sidebar = ({id}) => {
    const [open, setOpen] = useState(true);
    const [modal, setModal] =useState(false);
    const menus = [
        {name:"dashboard", icon: MdOutlineDashboard},
        {name:"user", icon: AiOutlineUser},
        {name:"update",icon:BsFillRocketFill},
        {name:"Saved", icon: AiOutlineHeart},
        {name:"Setting", icon: RiSettings4Line},   
    ];
    
  return (
    <>
    <section className="flex gap-6">
      <div className={`min-h-screen bg-[#0e0e0e] ${open? "w-72" : "w-16"} text-gray-100 px-4`}>
        <div className="py-3 flex justify-end"  onClick={() => setOpen(!open)}>
          <HiMenuAlt3 size={26} className="cursor-pointer"/>
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
            
       {menus.map((menu, i) =>{
       
        return(<div  key={i} className={`group flex hover:bg-gray-800 items-center text-sm gap-3.5 font-medium p-2 ${menu.margin? "mt-5": "mt-0"} rounded-md cursor-pointer`}>
            <div onClick={()=>{
                if(menu.icon == BsFillRocketFill){
                    setModal(true)
                    console.log(modal);
                }
            }}>{React.createElement(menu.icon, {size:"20"})}</div>
            <h2 style={{transitionDelay:`${i+3}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
            <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 overflow-hidden group-hover:duration-300 group-hover:w-fit`}>{menu.name}</h2>
        </div>)
       })}
    
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold ">
        {modal && <Update idu={id}  closeModal= {setModal}/>}
      </div>
    </section>
    </>
  )
}

export default Sidebar
