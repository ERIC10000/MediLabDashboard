import styled from 'styled-components'
import ButtonPrimary from '../styles/ButtonPrimary';

//Styled Component
const Btn = styled.button`
    color: white;
    background-color: black;
    padding: 1%;
    width: 10em;
    display: inline-block;
`

const Heading = styled.h1`
    text-align: center;
    font-size: 5rem;
    font-family: 'Courier New', Courier, monospace;
`
const AboutUs = () => {
    return ( 
        <div className="about">
            <Btn>Get Started</Btn>
            <Heading>Welcome</Heading>
            <ButtonPrimary>Add Nurse</ButtonPrimary>
            <p>test</p>
            <b>jkgjkgjkgjkghjghjg</b>


            <button className='btn btn-danger'>Download</button>

            <section className='row'>
                <div className='col-md-6 bg-info'>
                       TODO
                </div>
                 <div className='col-md-6 bg-warning'>
                       TODO
                 </div>
            </section>

            <section className='modcom'>
                 Blah 
            </section>

    
        </div>
     );
}
 
export default AboutUs;