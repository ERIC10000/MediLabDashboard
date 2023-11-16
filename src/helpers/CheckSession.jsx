
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckSession = () => {
    const navigation = useNavigate()

    const lab_name = localStorage.getItem("lab_name")
    const lab_id = localStorage.getItem("lab_id")
    const refresh_token = localStorage.getItem("refresh_token")

    useEffect(() => {
        if(!lab_name && !lab_id && !refresh_token){
            localStorage.clear()
            return navigation("/signin")
        }

    }, [lab_name, lab_id, refresh_token, navigation]);

    return {lab_name, lab_id, refresh_token}
    
}
 
export default CheckSession;