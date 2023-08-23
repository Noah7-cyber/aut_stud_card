import EmailVerify from "./Pages/EmailVerify"
import {Routes, Route} from "react-router-dom"
import PersonalInfo from "./Pages/personalInfo"
import Log from "./Pages/Log"
import Registerform from "./components/Registerform";
import { Dashboard } from "./Pages/Dashboard"
import  Update  from "./components/update"
function App() {
 

  return (
    <>
   

   
    <Routes>
      <Route path="/" element={<PersonalInfo />}>
        <Route index element={<Registerform/>}></Route>
      </Route>
      <Route path="/emailverify" element={<EmailVerify />}></Route>
        <Route path="/login" element={<Log />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
   
  
   
   

         
    </>
  )
}

export default App
