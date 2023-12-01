import Layout from "../helpers/Layout";
import MainContent from "./MainContent";
import Main from "../styles/Main";
import CheckSession from "../helpers/CheckSession";
import { useEffect,useState } from "react"
import axiosInstance from "../helpers/axiosInstance";




const Nurses = () => {
    //check session:are you a valid user
    const{lab_name,lab_id,refresh_token} = CheckSession();

    //set the useState hooks

    const[nurses,setNurses]= useState(null);
    //nb:lab_tests is a jason array
    //content of a lab test->JSONObject
    const[email,setEmail] = useState(null)
    const[username,setUsername] = useState(null)
    const[phone,setPhone] = useState(null)
    const[nurse_id,setNurseId] = useState(null)
   
   

    //ui hooks
    const[Loading,setLoading] = useState(false)
    const[error,setError] = useState(null)

    //post HTTP using an axios Instance
    //payload should contain the lab_id
    //response:an array of lab_tests objects-> lab_tests


    const {instance} = axiosInstance()

    useEffect(() => {
        instance.post("/view_nurses", {
            lab_id: lab_id
        })
        .then(function(response) {
            setNurses(response.data);
            setLoading(false);
            console.log(response.data);  // Log the updated state directly from the response
            console.log(lab_id);
        })
        .catch(function(error) {
            setError(error.message);
            setLoading(false);
            console.log(error.message);
            console.log(lab_id);
        });
    }, [lab_id]);



    return(
        <div>
            <Layout/>
            <Main>
                <div className="card shadow mb-4 mx-3">
                    <div className="card-header py=3">
                        <h6 className="m-0 font-weight-bold text-primary text-start">Nurses</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-primary" cellSpacing={0}>
                                <thead>
                                    <tr>
                                    <th>NurseId</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                       
                                       
                                    </tr>

                                </thead>
                                <tbody>
                                    {nurses &&nurses.map((nurse) =>
                                     <tr>
                                            <td>{nurse.nurse_id}</td>
                                            <td>{nurse.username}</td>
                                            <td>{nurse.email}</td>
                                            <td>{nurse.phone}</td>
                                           
                                         
                                     </tr>
                                    )}
                                   

                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>

            </Main>
        </div>
    );
}
 
export default Nurses;

// Implement Search nurses Based on Username
