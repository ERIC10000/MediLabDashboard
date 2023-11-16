// import { useNavigate } from "react-router-dom";
// import CheckSession from "../helpers/CheckSession";
// import Layout from "../helpers/Layout";
// import Main from "../styles/Main";
// import { useState } from "react";
// import axiosInstance from "../helpers/axiosInstance";
// const AddTest = () => {

//     // Cannot Add Lab Test if not logged in
//     // checkSeesion()

//     const {lab_name, lab_id, refresh_token} = CheckSession();
//     const navigation = useNavigate();


//     // set the useState Hooks for the LabTests
//     const [test_name, setTestName] = useState(null)
//     const [test_cost, setTestCost] = useState(null)
//     const [test_discount, setTestDiscount] = useState(null)
//     const [test_availability, setTestAvailability] = useState(null)
//     const [test_description, setTestDescription] = useState(null)
//     const [more_info, setTestMoreInfo] = useState(null)

//     // update UI
//     const [loading, setLoading] = useState(false)
//     const [success, setSuccess] = useState(null)
//     const [error, setError] = useState(null)


//     // Create AxioInstance object(Token Should be Passed)

//     const {instance} = axiosInstance()

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // set the hooks
//         setLoading(true)
//         setSuccess(null)
//         setError(null)

//         // Post the data -> instance
//         instance.post('/add_lab_test', {
//             lab_id: lab_id,
//             test_name: test_name,
//             test_cost: test_cost,
//             test_discount: test_discount,
//             availability: test_availability,
//             test_description: test_description,
//             more_info: more_info


//         })
//         .then(function(response){
//             setLoading(false)
//             setSuccess(response.data.message)

//         })
//         .catch(function(error){
//             setLoading(false)
//             setError(error.message)

//         })
//     }

//     return ( 
//         <div>
//             <Layout/>
//             <Main>
//                 <form className="card shadow p-4 m-3 bg-warning" onSubmit={handleSubmit}>
//                 <h3 className="text-start">Register Lab Test</h3>
//                     <div className="card-body">

//                         {loading && <div className="text-primary">Adding Test, Please Wait....</div> }
//                         {success && <div className="text-primary"> {success}</div> }
//                         {error && <div className="text-primary"> {error}</div> }

//                         <input type="text" onChange={(event) =>setTestName(event.target.value) }  placeholder="Enter Test Name" className="form-control" required/> <br />

//                         <input type="number" onChange={(event) =>setTestCost(event.target.value) }  placeholder="Enter Test Cost" className="form-control" required/> <br />

//                         <input type="number" onChange={(event) =>setTestDiscount(event.target.value) }  placeholder="Enter Test Discount" className="form-control" required/> <br />

//                         <input type="text" onChange={(event) =>setTestAvailability(event.target.value) } placeholder="Enter Test Availability" className="form-control" required/> <br />

//                         <input type="text"  onChange={(event) =>setTestMoreInfo(event.target.value) } placeholder="Enter More Info" className="form-control" required/> <br />

//                         <textarea  cols="30" rows="10" onChange={(event) =>setTestDescription(event.target.value) } className="form-control"></textarea> <br />

//                         <button className="btn btn-dark text-start">Add Test</button>

//                     </div>

//                 </form>
                
//             </Main>
            
//         </div>
//      );
// }
 
// export default AddTest;

import Layout2 from "../helpers/Layout";
import MainContent from "./MainContent";
import Main from "../styles/Main";
import CheckSession from "../helpers/CheckSession";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../helpers/axiosInstance";

const AddTest = () => {
    //cannot add labtest if not logged in
    //checkSession()
    const{lab_name,lab_id,refresh_token} = CheckSession();
    const navigation = useNavigate();

    //set the hooks for the lantests
    const[test_name,setTestName] = useState(null)
    const[test_description,setTestDescription] = useState(null)
    const[test_cost,setTestCost] = useState(null)
    const[test_discount,setTestDiscount] = useState(null)
    const[more_info,setTestMoreInfo] = useState(null)
    const[Availability,setTestAvailability] = useState(null)

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
        instance.post('/add_lab_test',{
            lab_id:lab_id,
            test_name:test_name,
            test_description:test_description,
            test_cost:test_cost,
            test_discount:test_discount,
            more_info:more_info,
            Availability:Availability
        }).then(function(response) {
            setLoading(false)
            setSuccess(response.data.message)

        }).catch(function(error){
            setLoading(false)
            setError(error.message)

        })


    }

    return (
        <div className="add-test">97
            <Layout2/>
            <Main>
                <form className="card shadow p-4 m-3 bg-info" onSubmit={handleSubmit}>
                    <h3 className="text-start">Register Lab Test</h3>
                <div className="card-body">

                    {Loading&& <div className="text-primary"> adding test,please wait.....</div>}
                    {success&& <div className="text-primary">{success}</div>}
                    {error&& <div className="text-primary">{error}</div>}


                    <input type="text" onChange={(event) =>setTestName(event.target.value)} placeholder="enter test name"
                     className="form-control" required/><br></br>
                      <input type="text" onChange={(event) =>setTestAvailability(event.target.value)} placeholder="enter test availability"
                     className="form-control" required/><br></br>
                      <input type="number" onChange={(event) =>setTestCost(event.target.value)} placeholder="enter test cost"
                     className="form-control" required/><br></br>
                      <input type="number" onChange={(event) =>setTestDiscount(event.target.value)} placeholder="enter test discount"
                     className="form-control" required/><br></br>
                      <input type="text" onChange={(event) =>setTestMoreInfo(event.target.value)} placeholder="enter more info"
                     className="form-control" required/><br></br>
                    <textarea cols="30" rows="10" onChange={(event) =>setTestDescription(event.target.value)} className="form-control"></textarea><br />
                    <button className="btn btn-dark text-start">Add Test</button>
                </div>
                </form>
       
            </Main>
        </div>
     );
}
 
export default AddTest;

