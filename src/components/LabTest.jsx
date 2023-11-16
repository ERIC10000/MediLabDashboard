import { useEffect, useState } from "react";
import CheckSession from "../helpers/CheckSession";
import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import axiosInstance from "../helpers/axiosInstance";

const LabTest = () => {

    // Check Session: Are You Login?
    const {lab_name, lab_id, refresh_token} = CheckSession();

    // set the Use State Hooks: Data Representation
    const [lab_tests, setLabTests] = useState(null);
    // NB: lab_tests is a JSONArray -> [{}, {}, {}]

    // contents/Details of a labtests -> JSONObject
    //set the hooks for the lantests

    const[test_name,setTestName] = useState(null)
    const[test_description,setTestDescription] = useState(null)
    const[test_cost,setTestCost] = useState(null)
    const[test_discount,setTestDiscount] = useState(null)
    const[more_info,setTestMoreInfo] = useState(null)
    const[Availability,setTestAvailability] = useState(null)

    // UI hooks
    //update UI
    const[Loading,setLoading] = useState(false)
    const[error,setError] = useState(null)


    // Post Http using the axio Instance
    // Payload/Request: lab_id
    // Response: Array of Lab Tests Objects -> lab_tests
    const {instance} = axiosInstance()
    useEffect(() =>{
        instance.post("/view_lab_test", {
            lab_id: lab_id
        })
        .then(function(response){
            setLabTests(response.data)
            setLoading(false)
            console.log(response.data) // Log the response.data directly
            console.log(lab_id)
        })
        .catch(function(error){
            setError(error.message)
            setLoading(false)
            console.log(error.message)
            console.log(lab_id)
        })
        
    }, [lab_id])
    
    // useEffect(() =>{
    //     instance.post("/view_lab_test", {
    //         lab_id: lab_id
    //     })
    //     .then(function(response){
    //         setLabTests(response.data)
    //         // Check Lab Testss
    //         setLoading(false)
    //         console.log(lab_tests)
    //         console.log(lab_id)
    //     })
    //     .catch(function(error){
    //         setError(error.message)
    //         setLoading(false)
    //         console.log(error.message)
    //         console.log(lab_id)
    //     })
        
    // }, [lab_id])  // end
    


    return ( 
        <div>
            <Layout/>
            <Main>
                <div className="card shadow mb-4 mx-3">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary text-start">Laboratory Tests</h6>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-primary" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Test Name</th>
                                        <th> Test Description</th>
                                        <th>Test Cost</th>
                                        <th>Test Discount</th>
                                        <th>Test Availability</th>
                                        <th>Test More Information</th>
                                    </tr>

                                </thead>


                                <tbody>
                                    {lab_tests && lab_tests.map((lab_test) => 

                                        <tr>
                                            <td>{lab_test.test_name}</td>
                                            <td>{lab_test.test_description}</td>
                                            <td>{lab_test.test_cost}</td>
                                            <td>{lab_test.test_discount}</td>
                                            <td>{lab_test.Availability}</td>
                                            <td>{lab_test.more_info}</td>

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
 
export default LabTest;