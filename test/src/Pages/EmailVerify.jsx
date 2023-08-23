import React, { useEffect } from 'react'
import axios from 'axios'
import SideNav from '../components/sideNav'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import EMAIL_VALIDATION_KEY from '../emailvalidapi_key'
 
function EmailVerify() {
  let error = 'checking errors';
 const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email:"",
        password: "",
        confirmPassword: "",
        matric: ""
    })
   
   
    const testEmail = async() =>{
      
    }
    const location = useLocation();
    let message = location.state?.message;
    
    // useEffect(() =>{
    //   if(message === undefined){
    //     navigate("/");
    //   }
    // })
  
   
    //handle click
    const handleClick = async(e) =>{ 
      e.preventDefault();
        try{
        inputs.matric = message.matric;
        console.log(inputs.matric);
        await testEmail();
       const password = inputs.password;
       const confirmPassword = inputs.confirmPassword  
       const email = inputs.email;

     const response = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${EMAIL_VALIDATION_KEY}&email=${email}`);
     const data = await response.json(); 
          console.log(data);

                 if(data.deliverability !== 'DELIVERABLE'){
                  e.preventDefault();
                 error = 'Your email dosent exist';
                 }

      const checkPassword = (password === confirmPassword)
        if(checkPassword == false){
        e.preventDefault();
        error = 'Your password is not correct';
      }
       if(data.deliverability === 'DELIVERABLE' && (checkPassword===true)){
        e.preventDefault();
        const url = "http://localhost/autStudN/phpHandlers/emailverification.php"
        axios.post(url, inputs)
        .then(res =>{
          if (res.data !== "success") {
            alert("things are not done properly")
          }else{
          console.log(inputs);
          console.log(res.data)
          navigate("/login")
          }
        })  
        .catch((e) => alert(`matric not set ${e.message}`)) 
    }
  }catch(e){
      console.log(e.message);
    }
  
    }
  return (
    <>
    <div className="h-screen w-screen bg-blue-300 md:grid">
    <div className="flex   md:shadow-lg md:rounded-lg md:mx-11 md:py-3 md:bg-white  md:px-3 place-self-center" >
        <SideNav secoundStyle="hsl(206, 94%, 87%)"/> 
        {error && <>
      <div className="px-6 absolute md:relative top-0 md:pt-6" id="form"> 
        <form  className="flex w-full flex-col shadow-lg py-3  px-3 rounded-xl md:shadow-none" id="myForm" style={{backgroundColor:" hsl(0, 0%, 100%)"}}>
            <h1 className="text-2xl font-bold">Email confirmation</h1>
            <p style={{color:"hsl(231, 11%, 63%)"}}>Please provide email and verify password</p>
           <p className=" text-base text-amber-500 font-bold">{error}</p>
            <label className="text-sm mt-4 font-medium" htmlFor="email">Email</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="email" email="email" onChange={e => setInputs({...inputs, email:e.target.value})} required/>
          
            <label className="text-sm mt-4 font-medium" htmlFor="password">Password</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="password" name="password" onChange={e => setInputs({...inputs, password:e.target.value})} required/>
           
            <label className="text-sm mt-4 font-medium"  htmlFor="confirmpassword">Confirm Password</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2"   type="password" onChange={e => setInputs({...inputs, confirmPassword:e.target.value})} name="confirmpassword"  required/>
           
            
            <div className="flex justify-between mt-3">
            <Link to = "/">
               <input type="submit" className="rounded-lg border-solid border-2  py-2 px-2  text-lg font-semibold hover:cursor-pointer shadow-md "   value="go back"   />
               </Link>
           
            <input onClick={handleClick} id="myButton" type="submit" className="rounded-lg border-solid border-2 py-2 px-2  text-lg font-semibold shadow-md text-white "   value="confirm" style={{backgroundColor:"hsl(243, 100%, 62%)"}}  required/>
            </div>
            
            
        </form>
        </div>
    </>}
        </div>  
    </div>
    </>
  )
}
//
//
export default EmailVerify