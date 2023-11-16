import Layout from "../helpers/Layout";

import MainContent from "./MainContent";
import Main from "../styles/Main";
import CheckSession from "../helpers/CheckSession";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../helpers/axiosInstance";

 
const AddNurse = () => {
    //cannot add nurse if not logged in
    //checkSession()
    const{lab_name,lab_id,refresh_token} = CheckSession();
    const navigation = useNavigate();

    //set the hooks
    const[username,setUsername] = useState(null)
    const[email,setEmail] = useState(null)
    const[phone,setPhone] = useState(null)
    const[password,setPassword] = useState(null)
 

    //update UI
    const[Loading,setLoading] = useState(false)
    const[success,setSuccess] = useState(null)
    const[error,setError] = useState(null)

    //create AxiosInstance object(token should be passed)
    const{instance} = axiosInstance()
    const handleSubmit = (event) => {
        event.preventDefault();

        //set hooks
        setLoading(true)
        setSuccess(null)
        setError(null)

        //post the data ->instance
        instance.post('/add_nurses',{
           username:username,
           email:email,
           phone:phone,
           password:password,
           lab_id:lab_id
        }).then(function(response) {
            setLoading(false)
            setSuccess(response.data.message)

        }).catch(function(error){
            setLoading(false)
            setError(error.message)

        })

    }



    return (
        <div className="add-nurse">
            <Layout/>
            <Main>
                <form className="card shadow p-4 m-3 bg-info" onSubmit={handleSubmit}>
                    <h3 className="text-start">Add Nurse</h3>
                <div className="card-body">

                    {Loading&& <div className="text-primary"> adding nurse,please wait.....</div>}
                    {success&& <div className="text-primary">{success}</div>}
                    {error&& <div className="text-primary">{error}</div>}


                    <input type="text" onChange={(event) =>setUsername(event.target.value)} placeholder="enter user name"
                     className="form-control" required/><br></br>
                      <input type="email" onChange={(event) =>setEmail(event.target.value)} placeholder="enter your email"
                     className="form-control" required/><br></br>
                      <input type="tel" onChange={(event) =>setPhone(event.target.value)} placeholder="enter your phone number"
                     className="form-control" required/><br></br>
                      <input type="password" onChange={(event) =>setPassword(event.target.value)} placeholder="password"
                     className="form-control" required/><br></br>
                      <button className="btn btn-dark text-start">Add Nurse</button>
                     
                </div>
                </form>
       
            </Main>
        </div>
     );
}
export default AddNurse;