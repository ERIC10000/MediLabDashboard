import Layout from "../helpers/Layout";
import MainContent from "./MainContent";
import Main from "../styles/Main";
import CheckSession from "../helpers/CheckSession";
import { useEffect,useState } from "react"
import axiosInstance from "../helpers/axiosInstance";

const Bookings = () => {
        //check session:are you a valid user
        const{lab_name,lab_id,refresh_token} = CheckSession();

        //set the useState hooks
   
        const[bookings,setBookings]= useState([]);
        //nb:lab_tests is a jason array
        //content of a lab test->JSONObject
        const[appointment_time,setAppintmentTime] = useState(null)
        const[appointment_date,setAppintmentDate] = useState(null)
        const[surname,setSurname] = useState(null)
        const[booked_for,setbookedFor] = useState(null)
        const[dependant_id,setDependantId] = useState(null)
        const[where_taken,setWhereTaken] = useState(null)
       
       
   
        //ui hooks
        const[Loading,setLoading] = useState(false)
        const[error,setError] = useState(null)

         //search usestate
      const[query,setQuery] = useState('')
      //filterd nurses hook
      const[filteredBookings,setFilteredBookings] = useState([]);
   
        //post HTTP using an axios Instance
        //payload should contain the lab_id
        //response:an array of lab_tests objects-> lab_tests
   
   
        const {instance} = axiosInstance()
   
        useEffect(() => {
            instance.post("/view_bookings", {
                lab_id: lab_id
            })
            .then(function(response) {
                setBookings(response.data);
                setFilteredBookings(response.data)
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

        const handleLiveSearch= (targetValue) => {
            setQuery(targetValue)
   
            const filtered = bookings&&bookings.filter((booking) =>
            booking.booked_for.toLowerCase().includes(targetValue.toLowerCase()))
   
            setFilteredBookings(filtered)
           
   
        }



        return(
            <div>
                <Layout/>
                <Main>
                    <div className="card shadow mb-4 mx-3">
                        <div className="card-header py=3">
                            <h6 className="m-0 font-weight-bold text-primary text-start">Bookings</h6>
                            <div className="input-group">
                        <input type="text" className="form-control bg-info border-0 small mt-3"
                        placeholder="Search Bookings" value={query}onChange={(event) =>handleLiveSearch(event.target.value)}/>

                      </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-primary" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                        <th>AppointmentDate</th>
                                            <th>AppointmentTime</th>
                                            <th>Surname</th>
                                            <th>BookedFor</th>
                                            <th>Where Taken</th>
                                            <th> Inoice Number</th>
                                            <th>Status </th>
                                
                                        </tr>
   
                                    </thead>
                                    <tbody>
                                        {filteredBookings && filteredBookings.map((booking) =>
                                         <tr>
                                                <td>{booking.appointment_date}</td>
                                                <td>{booking.appointment_time}</td>
                                                <td>{booking.key.surname}</td>
                                                <td>{booking.booked_for}</td>
                                               
                                                <td>{booking.where_taken}</td>

                                                <td>{booking.invoice_no}</td>
                                                {/* <td>{ booking.status === true ? (
                                                    <td><span className="badge bg-success">Allocated</span></td>
                                                ) : booking.status === false (
                                                    <td><span className="badge bg-warning">Assign</span></td>
                                                )
                                                    }</td> */}
                                                
                                               
                                               
                                               
                                               
                                             
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
 
export default Bookings;