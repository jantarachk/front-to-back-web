import { useNavigate } from "react-router";
import useAuthStore from "../store/auth-store";
import { createAlert } from "../Utils/createAlert";

function Logout() {
    const actionLogout = useAuthStore((state)=>state.actionLogout)
    const navigate = useNavigate()


    const hdlLogout = () =>{
        console.log("HDL Logout working")
        createAlert("success", " Logout Success ")
        actionLogout()
        navigate("/")
    }

    return <div className="text-white"> 
        <button onClick={hdlLogout} className="hover:cursor-pointer">
            Logout
        </button>   
         </div>
}

export default Logout