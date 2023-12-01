
import  Modal  from "react-modal";
import { useState, useEffect } from "react";
import axiosInstance from "../helpers/axiosInstance";


const DeleteBooking = ({isOpen, onClose, book_id}) => {

    const custom = {
        content: {
            top: '15%',
            left: '30%',
            bottom: '5%',
            backgroundColor: 'aqua',
            borderRadius: '20px'
        }
    }

    // Prepare the useState Hooks 
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    // useEffect
    useEffect(() => {
        // implementation Done Here
    }, [book_id])

    

    const {instance } = axiosInstance()
    const handleDelete = () => {
        setLoading(true)
        instance.post("/delete_booking",{ book_id: book_id})
        .then(function(response){
            setLoading(false)
            window.location.reload();
            alert(response.data.message)
        })
        .catch(function(error){
            setLoading(false)
            window.location.reload();
            alert(error.message)
        })

    }

    return ( 
        <Modal 
         isOpen={isOpen} 
         onRequestClose={onClose}  
         style={custom}
         contentLabel="Delete Booking">

            <h3 className="text-danger text-start">Are You sure You want to Delete Booking?</h3>
            <br />
            Booding ID:  {book_id}
            
            <div className="d-flex p-2 m-2 justify-content-end">
                <button onClick={handleDelete} className="btn btn-danger btn-sm me-3">Accept</button>
                <button className="btn btn-secondary btn-sm">Cancel</button>
            </div>

            {loading &&  <div>Loading...Please Wait</div> }
            {error &&  <div>{error}</div> }

        </Modal>
     );
}
 
export default DeleteBooking;