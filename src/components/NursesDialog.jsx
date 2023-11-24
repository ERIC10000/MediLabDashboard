import { useNavigate } from "react-router-dom";
import CheckSession from "../helpers/CheckSession";
import { Modal } from "react-modal";

const NursesDialog = () => {

    const {lab_name, lab_id, refresh_token} = CheckSession();
    const navigation = useNavigate();

    const custom = {
        content: {
            top: '15%',
            left: '30%',
            bottom: '40%'
        }
    }

    return (  
        <Modal>
            style = {custom}
            <h4>Assigmment Section</h4>
            <div className="text-center">
                Invoice Number: RTE56W <br />
                <label htmlFor="">Select a Nurse</label>
                <select className="form-control">
                    <option value="">--Select--</option>
                    {/* We will fetch All the Nurses */}
                    <option value="mary">Mary</option>

                </select>

                Selected: Nurse ID and Inoice Number <br />

                <button className="btn btn-dark btn-sm">Assign Nurse</button> <br /><br />
                <button className="btn btn-dark btn-sm">Close</button>

            </div>

        </Modal>
    );
}
 
export default NursesDialog;