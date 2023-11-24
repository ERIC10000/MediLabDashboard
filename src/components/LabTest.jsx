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


    // search useState
    const [query, setQuery] = useState('')

    // filtred Labtest Hook
    const [filteredLabTests, setFilteredLabTests] = useState(null);


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
            setFilteredLabTests(response.data)
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

    

    const handleLiveSearch = (targetValue) => {
        setQuery(targetValue)
        
        const filtered = lab_tests && lab_tests.filter((test) =>  
        test.test_name.toLowerCase().includes(targetValue.toLowerCase()));

        setFilteredLabTests(filtered)
    }
    
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
                        <div className="input-group">
                            <input type="text" className="form-control bg-info border-0 smaall mt-3" placeholder="Search Lab Tets" value={query} onChange={(event) => handleLiveSearch(event.target.value)}/>

                        </div>
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
                                    {filteredLabTests && filteredLabTests.map((lab_test) => 

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


// View All the Nurses
// Endpoint: /-
// Payload: lab_id


// content

// {
//     "email": "lucy@gmail.com",
//     "lab_id": 5,
//     "nurse_id": 1,
//     "password": "$2b$12$6B3mBEbhLMoJes9sTjaLu.FXg0sxawzrpqwtEOi8SIjZLWFNefmIG",
//     "phone": "+254768016847",
//     "reg_date": "Thu, 03 Aug 2023 05:27:35 GMT",
//     "username": "lucy"
// },


// Bookings
// payload/request: lab_id
// EndPoint: 

// JSONArray
//view bookings
// "lab_id":"1"
 

// /view_bookings
 

 

    
//         "lab_id": 1,
//         "latitude": "1.456789",
//         "longitude": "32.3456789o",
//         "member_id": 3,
//         "status": 0,
//         "test_id": 1,
//         "where_taken": "Home"


// "appointment_date": "2023-01-08",
//         "appointment_time": "10:00:00",
//         "book_id": 1,
//         "booked_for": "Dependant",
//         "dependant_id": 1,
//         "invoice_no": "5454545",
//         "key": {
//             "dob": "2000-06-08",
//             "email": "jennifer@gmail.com",
//             "gender": "female",
//             "location_id": 4,
//             "member_id": 3,
//             "others": "clerkson",
//             "password": "$2b$12$6KEgj9z00j8EOUjE.QESieWH6WIWGMfX8mulfX/88x0mFwzH/xL6.",
//             "phone": "+254768016847",
//             "reg-date": "2023-07-26 13:30:15",
//             "status": 1,
//             "surname": "jennifer"