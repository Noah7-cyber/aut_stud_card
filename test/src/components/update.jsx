import axios from 'axios';
import React, { useState } from 'react'

 const Update = ({idu, closeModal}) => {
      const [inputs, setInputs] = useState({
        name:"",
        passport:null,
        dob: "",
        gender:"",
        phone_no:""
      })
      const [err, setErr] = useState(false)
      const updateValues={}; 
      const handleUpdate =(e)=>{
        e.preventDefault();
       //he2uifguilsfgcuiwd;aj
       const reader = new FileReader();
       if (inputs.passport) {
        reader.readAsDataURL(inputs.passport); // Read the file as base64
      }
      reader.onload = () => {
        const passportBase64 = reader.result.split(',')[1]; // Extract base64 data
        
        
        inputs.passport = passportBase64;
        console.log(inputs);
        for (const [key, value] of Object.entries(inputs)) {
          if (value !== "" && value !== null && value !== undefined) {
            updateValues[key] = value;
          }
        }
        const updateWork = { ...updateValues, ["idu"]: idu };
        console.log(updateWork);
        const passport = inputs.passport;
        if(passport === null){
          setErr(true)
        }else{
          const url = "http://localhost/autStudN/phpHandlers/dashboard.php"
            axios.post(url, updateWork, {headers: {"Content-Type" : "*"}})
            
            .then(res => console.log(res.data))
        }
      }
      
       //dgydgujhelfwuifhweo;gefh
       
        
        
      
        

      }
  return (
   <>
    <div className="px-6 border-solid border-r-slate-600 border-2 rounded-lg absolute md:relative top-0 pt-4 self center drop-shadow-lg" id="form"> 
    <button onClick={() =>{closeModal(false)}}  className='float-right'>X</button>
        <form  className="flex w-full flex-col shadow-lg py-3  px-3 rounded-xl md:shadow-none" id="myForm" style={{backgroundColor:" hsl(0, 0%, 100%)"}}>
            <h1 className="text-2xl font-bold">Update Info</h1>
            <p style={{color:"hsl(231, 11%, 63%)"}}>Please provide a passport to work with</p>
           
            <label className="text-sm mt-4 font-medium" htmlFor="name">FullName</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="text" name="name" onChange={e => setInputs({...inputs, name:e.target.value})} />
          
            <label className="text-sm mt-4 font-medium" htmlFor="passport">Passport</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2" type="file" name="passport" onChange={e => setInputs({...inputs, passport:e.target.files[0]})}  required/>
            <p className={`text-red-500 text-sm ${err ? "block" : "hidden"} mb-3`} id="passporterr">passport is required</p>
            <label className="text-sm mt-4 font-medium"  htmlFor="dob">Date Of Birth</label>
            <input className="rounded-lg border-solid border-2 py-2 px-2"   type="date" onChange={e => setInputs({...inputs, dob:e.target.value})} name="dob"  />
           
            <div className="mt-4">
            <label className="text-sm font-medium mr-3"htmlFor="male">Male</label>
            <input className="rounded-lg border-solid border-2  mr-7"  type="radio" name="gender" id="male" onChange={e => setInputs({...inputs, gender:e.target.value})} value="Male" />
            <label className="text-sm mt-4 font-medium mr-3"htmlFor="female">Female</label>
            <input className="rounded-lg border-solid border-2 "  type="radio" name="gender" id="female" onChange={e => setInputs({...inputs, gender:e.target.value})} value="Female" />
            </div>
            
            <label className="text-sm mt-2 font-medium"  htmlFor="tel">Contact details</label>
            <input id="contact" className="rounded-lg border-solid border-2 py-2 px-2"  type="tel"  name="tel" onChange={e => setInputs({...inputs, phone:e.target.value})} />
            <p className="text-red-500 text-sm hidden mb-3" id="contacterror">Please input both prefix such as +*** and correct phone number</p>
            <div className="flex justify-between mt-3">
           
              <button  className="rounded-lg border-solid border-2  py-2 px-2  text-lg font-semibold hover:cursor-pointer shadow-md " onClick={() =>{closeModal(false)}} type="button">close</button>

            <input onClick={handleUpdate}  id="myButton" type="submit" className="rounded-lg border-solid border-2 py-2 px-2  text-lg font-semibold shadow-md text-white "   value="update" style={{backgroundColor:"hsl(243, 100%, 62%)"}}  />
            </div>
            </form>
            </div>

   </>
  )
}
export default Update;
