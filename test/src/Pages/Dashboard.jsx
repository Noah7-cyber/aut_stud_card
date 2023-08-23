import React, { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';

// import { Update } from '../components/update';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
export const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;
   
  // useEffect(()=>{
  //   if(message === undefined){
  //     navigate('/login')
  //   }
  // })
  return (
    < >
    {message && <>
      <Navbar name={message.name}/>
    <Sidebar id = {message.id} />
    </>}
    
    </>
  )
}
//04d90ce0504f1667306a2e1c96e7ef244bf7fd62745a4981ba91ee5d8d0110bb

//04d90ce0504f1667306a2e1c96e7ef244bf7fd62745a4981ba91ee5d8d0110bb
//africa is talking