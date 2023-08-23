import SideNav from "../components/sideNav";
import { Outlet} from "react-router-dom";
const PersonalInfo = () =>{
    
       
   

    
    return(
        <>
        <div className="h-screen w-screen md:grid bg-blue-300">
        <div className="flex   md:shadow-lg md:rounded-lg md:mx-11 md:py-3 md:bg-white md:px-3 place-self-center" >
        <SideNav firstStyle="hsl(206, 94%, 87%)"/> 
        <Outlet/>
        </div> 
        </div>
           
        </>
    )    
}
 
export default PersonalInfo;