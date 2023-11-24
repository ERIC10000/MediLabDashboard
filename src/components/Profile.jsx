import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import CheckSession from "../helpers/CheckSession";
import axiosInstance from "../helpers/axiosInstance";
import { useEffect, useState } from "react";


const Profile = () => {

    // Check Wether Logged IN 
    const {lab_name, lab_id, refresh_token } = CheckSession()

    // set the Hooks
    // userDetails
    // loading
    // error
    const [labDetails, setLabDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Axios Instance
    const {instance} = axiosInstance()

    useEffect(()=> {
        if(lab_id){
            instance.post("/view_lab_profile", {
                lab_id: lab_id
            })
            .then(function(response){
                console.log(response.data.laboratory)
                setLabDetails(response.data.laboratory)
                setLoading(false)
            })
            .catch(function(error){
                setError(error.message)
                setLoading(false)
    
            })
        }
    }, [lab_id]);

    // // check labDetails is Empty
    // const boolean = Object.keys(labDetails) > 0


    return ( 
        
        <div>
            <Layout/>
            <Main>
                <div className="p-2 m-2">
                    

                    {loading && <div className="text-primary"> Loading <br /> Plaese Wait.... </div> }

                    {error && <div className="text-danger"> Loading <br /> Plaese Wait.... </div> }
                </div>

                {
                labDetails && (

                    <div className="table-responsive card shadow m-2">
                        <h4 className="text-primary p-2 text-start">Lab Profile</h4>
                        <div className="table table-primary p-5 m-3">
                            <thead>
                                <tr>
                                    <th> Lab Email</th>
                                    <th>Lab Name</th>
                                    <th> Permit ID</th>
                                    <th>Lab Phone</th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{labDetails.email}</td>
                                    <td>{labDetails.lab_name}</td>
                                    <td>{labDetails.permit}</td>
                                    <td>{labDetails.phone}</td>

                                </tr>
                            </tbody>

                        </div>

                    </div>


  
                )
}
            </Main>
            
        </div>
     );
}
 
export default Profile;