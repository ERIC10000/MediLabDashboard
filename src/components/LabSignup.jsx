import { useState } from "react";
import axios from "axios";
import {styled} from "styled-components";
import { Link } from "react-router-dom";
import axiosInstance2 from "../helpers/axiosInstance2";


const LabSignup = () => {

    // Set the Hooks
    const [lab_name, setLabName] = useState(null)
    const [permit_id, setPermit_id] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)


    
    // Submitting Registration Details
    const handleSubmit = (event) => {
        event.preventDefault();

        // set the hooks
        setLoading(true)
        setSuccess(null)
        setError(null)
        
        // http requests: post(send), get(receive), put(modifying), delete(remove)
        // call the axioInstance2 and implement post method
        axiosInstance2.post('/laboratory_signup', {
            lab_name: lab_name,
            permit_id: permit_id,
            email: email,
            phone: phone,
            password: password

        })
        .then(function(response){
            // handle response
            console.log(response.data.message)
            setLoading(false)
            setSuccess(response.data.message)
            setTimeout((function(){
                setSuccess('')
            }), 2000)
        })
        .catch(function(error){
            // handle error
            setLoading(false)
            setError(error.message)
        });

    } // ends handleSubmit function

    return ( 

        <div className="form">
            <Section>
                {loading && <div className="text-white"> Loading <br /> Please Wait.... </div>}
                {success && <div className="succcess"> {success} </div>}
                {error && <div className="error"> {error} </div>}

                <form className="card shodow p-3 p-4 bg-info" onSubmit={handleSubmit}>
                    <h1>Register Lab Here</h1>
                    <div className="card-body">
                        <input type="text"  onChange={(event) => setLabName(event.target.value)}  placeholder="Enter Lab Name" required className="form-control"/> <br />

                        <input type="text" onChange={(event) => setPermit_id(event.target.value)}  placeholder="Enter Permit ID" required className="form-control"/> <br />

                        <input type="email" onChange={(event) => setEmail(event.target.value)}  placeholder="Enter Email" required className="form-control"/> <br />

                        <input type="tel" onChange={(event) => setPhone(event.target.value)}  placeholder="Enter Phone" required className="form-control"/> <br />

                        <input type="password" onChange={(event) => setPassword(event.target.value)}  placeholder="Enter Password" required className="form-control"/> <br />

                        <button className="btn btn-dark"> Register Lab </button> <br />

                        <Link to="/signin">Already Have Account?, Login</Link> <br />

                    </div>

                </form>

            </Section>
        </div>
     );
}
 
export default LabSignup;
const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    top: 50px;
    overflow: auto;

`