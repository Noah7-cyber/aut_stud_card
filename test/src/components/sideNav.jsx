import React from 'react'
import topbar from "../assets/images/bg-sidebar-mobile.svg"
import sidebar from "../assets/images/bg-sidebar-desktop.svg"
function SideNav({firstStyle, secoundStyle, thirdStyle}) {
  return (
        
         <section className='relative w-full md:w-1/2  ' >
               <img src={topbar} alt="" className='object-cover w-full  md:hidden'/>
               <img src={sidebar} id='img-desktop' alt="" className='hidden object-cover w-full md:block rounded-lg '/>
                <div className="w-full flex justify-center py-9 md:flex-col absolute top-0 md:left-[10%]"  id="absolute-side-options">
                <section className="hover:cursor-pointer flex items-center" id="info" >
                    <div className="rounded-full w-10 h-10 border-solid border-2 flex justify-center items-center ml-2 mr-2" id="number" style={{backgroundColor:firstStyle}}>1</div>
                    <article className="ml-2 font-bold text-lg  text-white  hidden md:flex md:flex-col"><span className="font-semibold text-sm text-opacity-300 " style={{color:"hsl(229, 24%, 87%)"}}>step 1</span><span> Your Info</span></article>
                </section>
                <section className="hover:cursor-pointer flex items-center md:mt-[3%]">
                    <div className="rounded-full w-10 h-10 border-solid flex border-2 justify-center items-center mr-2  ml-2" id="number" style={{backgroundColor:secoundStyle}}>2</div>
                    <article className="ml-2 font-bold text-lg text-white  hidden md:flex md:flex-col"><span className="font-semibold text-sm text-opacity-300" style={{color:"hsl(229, 24%, 87%)"}}>step 2</span><span>Verify Email</span></article>
                </section>
                <section className="hover:cursor-pointer flex items-center md:mt-[3%]">
                    <div className="rounded-full w-10 h-10 border-solid flex border-2 justify-center items-center mr-2  ml-2" id="number" style={{backgroundColor:thirdStyle}}>3</div>
                    <article className="ml-2 font-bold text-lg text-white  hidden md:flex md:flex-col"><span className="font-semibold text-sm text-opacity-300" style={{color:"hsl(229, 24%, 87%)"}}>step 3</span><span>Login</span></article>
                </section>
                
                </div>
                

            </section>
  )
}

export default SideNav