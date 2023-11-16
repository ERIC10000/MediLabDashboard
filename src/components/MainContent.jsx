import Layout from "../helpers/Layout";
import Main from "../styles/Main";
import CheckSession from "../helpers/CheckSession";
const MainContent = () => {

    const {lab_name, lab_id, refresh_token} = CheckSession()
    
    return ( 
        
        <div>
            <Layout/>
            <Main>
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow p-2 m-2">
                        <div className="card-body text-center">
                            <h2>20</h2>
                            Nurses
                         </div>
                    </div>
                </div> 
                 <div className="col-md-4">
                    <div className="card shadow p-2 m-2">
                        <div className="card-body text-center">
                            <h2>15</h2>
                            Lab Tests
                         </div>
                    </div>
                </div> 
                 <div className="col-md-4">
                    <div className="card shadow p-2 m-2">
                        <div className="card-body text-center">
                            <h2>KES 5,000</h2>
                            Sales
                         </div>
                    </div>
                </div> 


            </div>
            
            <br /><br />
            <h2>Analysis</h2>
            {/* TO DO GRAPHS */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
       </Main>
        </div>
     );
}
 
export default MainContent;