import React, { useEffect } from 'react'
import {HiMenuAlt3} from "react-icons/hi"
import {MdOutlineDashboard} from "react-icons/md";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import {BsFillRocketFill} from "react-icons/bs"
import {AiOutlineUser, AiOutlineHeart} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Update from './update';
import axios from 'axios';
const Sidebar = ({id}) => {

    const [open, setOpen] = useState(true);
    const [modal, setModal] =useState(false);
    const [inputs, setInputs] = useState({})
    const navigate  = useNavigate();
    const menus = [
        {name:"dashboard", icon: MdOutlineDashboard},
        {name:"user", icon: AiOutlineUser},
        {name:"update",icon:BsFillRocketFill},
        {name:"Saved", icon: AiOutlineHeart},
        {name:"Logout", icon: HiArrowRightOnRectangle},   
    ];
    const form = new FormData();
    form.append("id" , id)
    useEffect(() =>{
      const url = "http://localhost/autStudN/phpHandlers/userpagedata.php";
      
      axios.post(url, form)
      .then(res => {setInputs(res.data)
      console.log(res.data)});
    }, []);
    const handleCheck =() =>{
      const url = "http://localhost/autStudN/phpHandlers/request.php";
      axios.post(url, form)
      .then(res => console.log(res.data))
    }
  return (
    <>
    <section className="flex gap-6">
      <div className={`min-h-screen bg-[#0e0e0e] ${open? "w-72" : "w-16"} text-gray-100 px-4`}>
        <div className="py-3 flex justify-end"  onClick={() => setOpen(!open)}>
          <HiMenuAlt3 size={26} className="cursor-pointer"/>
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
            
       {menus.map((menu, i) =>{
       
        return(<div onClick={()=>{
          if(menu.icon == BsFillRocketFill){
              setModal(true)
          }else if(menu.icon == HiArrowRightOnRectangle ){
            navigate('/login');
          }
      }}  key={i} className={`group flex hover:bg-gray-800 items-center text-sm gap-3.5 font-medium p-2 ${menu.margin? "mt-5": "mt-0"} rounded-md cursor-pointer`}>
            <div >{React.createElement(menu.icon, {size:"20"})}</div>
            <h2 style={{transitionDelay:`${i+3}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
            <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 overflow-hidden group-hover:duration-300 group-hover:w-fit`}>{menu.name}</h2>
        </div>)
       })}
    
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold flex justify-center w-full">
        {modal && <Update idu={id}  closeModal= {setModal}/>}
        {inputs && <>
          <div className={`${modal? "hidden" : "block"} text-center`}>
          <h1 className='text-2xl' >Hello {inputs.name}</h1>
          <p>Update your passport <a className='text-blue-400 cursor-pointer' onClick={()=> setModal(true)}>here</a></p>
          <p>If your passport is updated then request for an ID card <a className='cursor-pointer text-blue-400 ' onClick={handleCheck}>here</a></p>
          
          </div>
         
        </>}
       
      </div>
    </section>
    </>
  )
}

export default Sidebar
