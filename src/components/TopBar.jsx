import styled from 'styled-components'
import Avatar from "../images/profile.png"
const TopBar = () => {
    //styled component

    // get lab_name from the local storage
    const lab_name = localStorage.getItem("lab_name")

    const Top = styled.section`
        background-color: grey;
        display: flex;
        flex-direction: row;
        width: 75vw;
        position: fixed;
        justify-content: space-between;
        right: 0;
        padding: 1%;
        color: brown;
        .right {
           margin-right: 2%;
           font-weight: 600;
        }
    `
    return (  
        <Top>
                <div>
                    <form action="">
                    <input type="text" className='form-control'
                        placeholder='Search by email..' />
                    </form>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">
                        Bookings <span class="badge bg-light text-dark">6</span>
                    </button>
                </div>
                <div className='right'>
                    <img src={Avatar} alt="" width={40} />   Lab: {lab_name}
                    <button className='ms-2 btn btn-light'>Logout</button>
                </div>
        </Top>
    );
}
 
export default TopBar;