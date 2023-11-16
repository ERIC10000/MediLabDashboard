import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigation = useNavigate()

    // Logout Function
    const handleLogout = () => {
        localStorage.clear();
        navigation("/signin")
    };

    return {handleLogout}
    
}
 
export default LogOut;

// Username: george
// Password: Modcom2023@