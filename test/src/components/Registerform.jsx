import React from 'react'
import PHONE_NUMBER_VALIDATION_KEY from "../phonevalidapi_key"
import {useNavigate} from "react-router-dom"
import {  useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
 const Registerform = () => {
    //declaration of variables
    const [inputs, setInputs] = useState({
        name:"",
        dob:"",
        gender:"",
        contact:"",
        matric:""
     })
    const testPhoneValidation = async() =>{
        const contact =  inputs.contact;
        console.log(contact);
        await  axios.get(`https://phonevalidation.abstractapi.com/v1/?api_key=${PHONE_NUMBER_VALIDATION_KEY}&phone=${contact}`)
        .then(response => {
             console.log(response.data);
            setValidation(response.data)
            
        })
        .catch(error => {
            console.log(error.message);  
        });
    }
        const navigate = useNavigate();
   
        
         const [validation, setValidation] = useState(null)

         //useEffect declaration
        
       const handleClick = async(e) =>{   
        try{
            console.log(inputs);
            console.log(inputs.name);
         await  testPhoneValidation();
           console.log(inputs);
   
           console.log(validation);
           const error =  document.getElementById('contacterror');
           if(validation.valid !== true){
              e.preventDefault()
              console.log(error);
               error.classList.remove('hidden')
               error.classList.add('block')
           }else if(validation.valid === true){
            e.preventDefault();
            const url = "http://localhost/autStudN/phpHandlers/personalInfo.php"
            axios.post(url, inputs)
            .then(res => {
                if(res.data !== "error"){
                navigate("/emailverify", {replace: true, state:{message: res.data}})
                }else{
                    alert("something went wrong")
                }
            })            
        } 
        }catch(e){
            console.log(e.message);
        }
      
    }
            //handleSUBMIT DECLARATion
            const handleSubmit = (e) =>{
               
                e.preventDefault();
                
                 
                
            }
  return (
    <>
    <div className="px-6 absolute md:relative top-0 pt-4" id="form"> 
        <form  onSubmit={handleSubmit} className="flex w-full flex-col shadow-lg py-3  px-3 rounded-xl md:shadow-none" id="myForm" style={{backgroundColor:" hsl(0, 0%, 100%)"}}>
            <h1 className="text-2xl font-bold">Personal Info</h1>
            <p style={{color:"hsl(231, 11%, 63%)"}}>Please provide your full name, date of birth,gender, contact details</p>
           
            <label className="text-sm mt-4 font-medium" htmlFor="name">FullName</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="text" name="name" onChange={e => setInputs({...inputs, name:e.target.value})} required/>
          
            <label className="text-sm mt-4 font-medium" htmlFor="matric">Matric</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="text" name="matric" onChange={e => setInputs({...inputs, matric:e.target.value})} required/>
           
            <label className="text-sm mt-4 font-medium"  htmlFor="dob">Date Of Birth</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2"   type="date" onChange={e => setInputs({...inputs, dob:e.target.value})} name="dob"  required/>
           
            <div className="mt-4">
            <label className="text-sm font-medium mr-3"htmlFor="male">Male</label>
            <input className="rounded-lg border-solid border-2  mr-7"  type="radio" name="gender" id="male" onChange={e => setInputs({...inputs, gender:e.target.value})} value="Male" required/>
            <label className="text-sm mt-4 font-medium mr-3"htmlFor="female">Female</label>
            <input className="rounded-lg border-solid border-2 "  type="radio" name="gender" id="female" onChange={e => setInputs({...inputs, gender:e.target.value})} value="Female" required/>
            </div>
            
            <label className="text-sm mt-2 font-medium"  htmlFor="tel">Contact details</label>
            <input id="contact" className="rounded-lg border-solid border-2 py-2 px-2"  type="tel"  name="tel" onChange={e => setInputs({...inputs, contact:e.target.value})} />
            <p className="text-red-500 text-sm hidden mb-3" id="contacterror">Please input both prefix such as +*** and correct phone number</p>
            <div className="flex justify-between mt-3">
            <Link to = "/login">
               <input type="submit" className="rounded-lg border-solid border-2  py-2 px-2  text-lg font-semibold hover:cursor-pointer shadow-md "   value="I already have an acount"   />
               </Link>
           
            <input onClick={handleClick} id="myButton" type="submit" className="rounded-lg border-solid border-2 py-2 px-2  text-lg font-semibold shadow-md text-white "   value="Register" style={{backgroundColor:"hsl(243, 100%, 62%)"}}  required/>
            </div>
            
            
        </form>
        </div></>
  )
}

export default Registerform

