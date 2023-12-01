import { useState } from "react";
import axios from "axios";
import {styled} from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axiosInstance2 from "../helpers/axiosInstance2";


const LabSignin = () => {
     // Set the Hooks
     const navigation = useNavigate()
     const [lab_name, setLabName] = useState(null)
     const [password, setPassword] = useState(null)

     const [loading, setLoading] = useState(false)
     const [success, setSuccess] = useState(null)
     const [error, setError] = useState(null)


     const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        setSuccess(null)
        setError(null)

        // http requests: post(send), get(receive), put(modifying), delete(remove)
        // call the axioInstance2 and implement post method
        axiosInstance2.post('/laboratory_signin', {
            lab_name: lab_name,
            password: password
            
        })
        .then(function(response){
            // handle response
            console.log(response.data)
            console.log("1 " + response.data.access_token)
            console.log("2 " + response.data.laboratory.lab_id)
            console.log("3 " + response.data.refresh_token)

            // Assuming Logged in
            // Saved Admin Infromation on Local Storage.
            localStorage.setItem("lab_id", response.data.laboratory.lab_id)
            localStorage.setItem("lab_name", response.data.laboratory.lab_name)
            localStorage.setItem("refresh_token", response.data.laboratory.refresh_token)

            setLoading(false)
            setSuccess(response.data.laboratory)

            // Authentication Mechanism
            if(!response.data.refresh_token){
                // No Navigation
                console.log("No Token")
            }

            else{
                console.log("Token Exists")
                navigation("/")
            }

        })
        .catch(function(error){
            setError(error.message)
            setLoading(false)
            
        });


     } // end handleSubmit

    return ( 
        <div className="">
        <Section>
            {loading && <div className="loading text-white"> Loading <br /> Please Wait.... </div>}
            {success && <div className="succcess text-white"> {success} </div>}
            {error && <div className="error text-white"> {error} </div>}

            <form className="card shodow p-3 p-4 bg-info" onSubmit={handleSubmit}>
                <h1> Login Here </h1>
                <div className="card-body">
                    <input type="text"  onChange={(event) => setLabName(event.target.value)}  placeholder="Enter Lab Name" required className="form-control"/> <br />

                    <input type="password"  onChange={ (event)=> setPassword(event.target.value)}  placeholder="Enter Password" required className="form-control"/> <br />

                    <button className="btn btn-dark"> Login </button> <br />

                    <Link to="/signup">Dont Have Account?, Signup</Link> <br />

                </div>

            </form>

        </Section>
    </div>
     );
}
 
export default LabSignin;
const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    top: 50px;
    overflow: auto;
    height: 100%

`

// labname: Agakhan
// Admin@2023