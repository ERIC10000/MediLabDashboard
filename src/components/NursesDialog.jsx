import { useNavigate } from "react-router-dom";
import CheckSession from "../helpers/CheckSession";
import  Modal  from "react-modal";
import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from "react";
import axiosInstance from "../helpers/axiosInstance";

const NursesDialog = ({ isOpen, onClose, invoice_no} ) => {

    const {lab_name, lab_id, refresh_token} = CheckSession();
    const navigation = useNavigate();
    const [nurses, setNurses] = useState([]);


    const [selected, setSelected] = useState(null)
    const [selectedID, setSelectedID] = useState(null)

    const [loading, setLoading] = useState(false)

    const {instance} = axiosInstance()


    const handleSelection = (e) =>{
        setSelected(e.target.value)
        setSelectedID(e.target.value)
    }


    const Allocate = (selectedID, invoice_no) => {
        setLoading(true);
        instance.post("/assign_nurses", {
            nurse_id: selectedID,
            invoice_no: invoice_no
        })
        .then(function (response){
            setLoading(false);
            console.log("Allocation successful:", response.data);
            navigation("/bookings");
            window.location.reload();
            alert(response.data.message);
            // Check if the navigation function is executed here
            
        })
        .catch(function(error){
            setLoading(false);
            console.error("Allocation error:", error);
            navigation("/bookings");
            window.location.reload();
            alert(error.message);
            // Check if the navigation function is executed here
            
        });
    };
    

    useEffect(() => {
        instance.post("/view_nurses", {
            lab_id: lab_id
        })
        .then(function (response){
            setNurses(response.data)
        })
        .catch(function(error){
            alert("Error Reading the Nurses")
        })

    }, [lab_id])


    const custom = {
        content: {
            top: '15%',
            left: '30%',
            bottom: '40%',
            backgroundColor: 'aqua',
            borderRadius: '15px',
            transition: '5s'
        }
    }

    function handleAllocate(){
        const confirm = window.confirm('Are You sure You want to Allocate?')
        if(confirm){
            Allocate(selectedID,invoice_no);
        }
    }


    return (  
        
        <div>
        
            <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Nurses Allocation" style = {custom}>

            <CSSTransition
                in={isOpen}
                timeout={300} // Adjust timeout duration as needed
                classNames="modal"
                unmountOnExit
            >
                <div className="modal-content">
                    <h4>Assignment Section</h4>
                    
            <div className="text-start">
                Invoice Number: {invoice_no} <br />
                <label htmlFor="">Select a Nurse</label>
                <select onChange={handleSelection} className="form-control">
                    <option value="">--Select--</option>
                    {/* We will fetch All the Nurses */}
                    {nurses && nurses.map((nurse)=>(
                        <option key={nurse.nurse_id} value={nurse.nurse_id}> Username: {nurse.username} Email:  {nurse.email}</option>
                    ) )}

                </select>
                <br /><br />

                Selected:  Nurse ID {selectedID} and Invoice Number {invoice_no} <br />
                {loading &&  <div className="text-success"> Please Wait .... </div> }
                {selectedID && (
                     <button onClick={handleAllocate} className="btn btn-dark btn-sm">Assign Nurse</button>
                )} <br /><br />

               
            </div>
                </div>



            </CSSTransition>
            

        </Modal>
        </div>
    );

    


}
 
export default NursesDialog;