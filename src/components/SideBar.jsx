import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {AiFillChrome, AiFillProfile, AiFillBook, AiFillFileAdd }  from 'react-icons/ai'
import LogOut from '../helpers/LogOut'


const SideBar = () => {

    //styles component
    const Section = styled.section`
    background-color: aqua;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 18vw;
    left: 0;
    height: 100%;
    overflow: auto;
    .top {
       display :flex;
       flex-direction: column;
       .brand {
          font-family: 'Courier New', Courier, monospace;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          svg {
            color: white;
          }
          span{
             font-size: 30px;
             text-align: center;
             margin-top: 10%;
             font-weight: 600;
          }
          b{
            color: brown;
            text-align: center;
          }
       }

       .links{
          display: flex;
          flex-direction: column;
          ul{
             padding: 5%;
             li{
                margin-top: 10%;
                list-style-type: none;
                text-align: left;
                margin-left: 15%;
                a{
                    text-decoration: none;
                    color: black;
                    font-size: larger;
                    font-weight: 400;
                    svg{
                        font-size: 25px;
                    }
                }
                a:hover{
                   color:orange;
                }
             } 
          }
       }
       
       .bottom {
            margin: 10%;
            background-color: goldenrod;
            padding: 10%;
            color: white;
            border-radius: 2%;
       }
       .logout {
          margin-bottom: 10%;
       }
    }
    `

    const {handleLogout} = LogOut();

    return ( 
        <Section>
        <div className="top">
            <div className="brand">
                    <span> <AiFillChrome /> MEDILAB</span> <br />
                    <b>Best Health Care</b>
            </div>
            <div className="links">
                <ul>
                    <li>
                          <Link to= "/"><AiFillChrome/> Dashboard</Link> 
                    </li>   
                    <li>
                          <Link to= "/profile"><AiFillProfile/> Profile</Link> 
                    </li> 
                    <li>
                          <Link to= "/bookings"><AiFillBook/> Bookings</Link> 
                    </li> 
                    <li>
                          <Link to= "/add_test"><AiFillFileAdd/> Add Test</Link> 
                    </li> 
                    <li>
                          <Link to = "/lab_tests"><AiFillChrome/> Lab Tests</Link> 
                    </li> 
                    <li>
                          <Link to = "/add_nurse"><AiFillChrome/> Add Nurse</Link> 
                    </li> 
                    <li>
                          <Link to= "/nurses"><AiFillChrome/> Nurses</Link> 
                    </li> 
                </ul>
            </div>
             {/* closes links */}
            <div className='bottom'>
                <span>Unlock New Features</span>
                <br />
                <button className='btn btn-dark'>Buy Now</button>
            </div>

            <div className='logout'>
                <button className='btn btn-outline-dark' onClick={handleLogout}>Logout</button>
            </div>
        </div> 
        </Section>
    
     );
}
 
export default SideBar;