import React, { useEffect, useState } from 'react'
import SideNav from '../components/sideNav'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Log() {
  const [error, setError] = useState(false)
  const [inputs, setInputs] = useState({
    matric: "",
    password: ""
  })
  const navigate = useNavigate();

  const handleClick = (e) =>{
   e.preventDefault();
    console.log(inputs);
    
    const url = 'http://localhost/autStudN/phpHandlers/login_handler.php'
      axios.post(url, inputs)
    .then(res => {
      console.log(res.data);
      console.log(res.data);
      if(res.data !== "error"){
       
        navigate('/dashboard', {state:{message:res.data} });
      }else{
        e.preventDefault();
        // alert("invalid email or password");
       setError(!error)
      }
    })
  }
  return (
    <>
    <div className="h-screen w-screen md:grid bg-blue-300">
    <div className="flex   md:shadow-lg md:rounded-lg md:mx-11 md:py-3 md:bg-white md:px-3 place-self-center" >
        <SideNav thirdStyle="hsl(206, 94%, 87%)"/> 
       
      <div className="px-6 absolute md:relative top-0 md:pt-6" id="form"> 
        <form  className="flex w-full flex-col shadow-lg py-3 pt-[9%] px-3 rounded-xl md:shadow-none" id="myForm" style={{backgroundColor:" hsl(0, 0%, 100%)"}}>
            <h1 className="text-2xl font-bold">Login</h1>
            <p style={{color:"hsl(231, 11%, 63%)"}}>Please provide correct details</p>
              
            <p className={` text-base ${error?"text-red-500": "text-amber-500"} font-bold`}> {error?"invalid email or password":"provide correct details"}</p>
            
           
            <label className="text-sm mt-4 font-medium" htmlFor="matric">matric</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="text" name="matric" onChange={e => setInputs({...inputs, matric:e.target.value})} required/>
          
            <label className="text-sm mt-4 font-medium" htmlFor="password">Password</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="password" name="password" onChange={e => setInputs({...inputs, password:e.target.value})} required/>
           
           
            
            <div className="flex justify-between mt-3">
            <Link to = "/">
               <input type="submit" className="rounded-lg border-solid border-2  py-2 px-2  text-lg font-semibold hover:cursor-pointer shadow-md "   value="don't have an account"   />
               </Link>
           
            <input onClick={handleClick} id="myButton" type="submit" className="rounded-lg border-solid border-2 py-2 px-2  text-lg font-semibold shadow-md text-white "   value="Login" style={{backgroundColor:"hsl(243, 100%, 62%)"}}  required/>
            </div>
            
            
        </form>
        </div>
   
        </div>  
    </div>
    </>
  )
}

export default Log
