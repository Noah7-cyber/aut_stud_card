import React, { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { Update } from '../components/update';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
export const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;
   
  useEffect(()=>{
    if(message === undefined){
      navigate('/login')
    }
  })
  return (
    < >
    {message && <>
      <ToastContainer />
      <Navbar name={message.name}/>
    <Sidebar id = {message.id} />
    </>}
    
    </>
  )
}
