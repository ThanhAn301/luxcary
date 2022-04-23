import react from "react";
import styled from "styled-components";


function Contact() {
    return (
        <Container>
            <div>
                <ul>
                    <li className="title">
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a style={{fontWeight: 'bolder'}} href="#">CONTACT US</a>
                    </li>
                </ul>
                <h1>CONTACT US</h1>
                <h1  style={{marginTop: '250px', fontSize:'100px',fontWeight: '700'}}>CUSTOMER CARE</h1>
                
                <img src='contact_us_hero_01.webp' width="1519" height="600"/>
                
            </div>
            
            <FirstContainer>
                <Content>
                    <h2>LAMBORGHINI</h2>
                    <h2>CUSTOMER CARE</h2>
                    <p>
                    Automobili Lamborghini is pleased to assist you <br></br>
                    with an attentive multi-channel service: <br></br>
                    You can ask your questions to the Lamborghini <br></br>
                    Assistant, who will guide you through the <br></br>
                    Lamborghini world.<br></br>
                    If our Assistant is unable to find what you are <br></br>
                    looking for, please scroll down and get in touch <br></br>
                    with our dedicated Customer Contact Center via <br></br>
                    phone or contact form.
                    </p>
                </Content>
                <Image>
                    <img src="contact_us_over_01.jpg" width="900" height="600"/>
                 </Image>
            </FirstContainer>

            <h2 style={{marginLeft: '150px'}}>MAKE A CALL</h2>
            <SecondContainer>
                
                 <Internaltional>
                    <h2>INTERNATIONAL</h2>
                    <p>PHONE: +39 051 9597282</p>
                    <p>Monday to Friday</p>
                    <p>(except holidays)</p>
                    <p>(8:00am to 7:00pm)</p>
                    <p>(GMT+1)</p>
                </Internaltional>  
                 <North>
                 <h2>NORTH AMERICA</h2>
                 <p>PHONE: +1 866 681 6276</p>
                    <p>Monday to Friday</p>
                    <p>(except holidays)</p>
                    <p>(8:00am to 5:00pm)</p>
                    <p>(EST)</p>
                 </North>
                 <China>
                 <h2>CHINA</h2>
                 <p>PHONE: +86 4001166606</p>
                    <p>Monday to Friday</p>
                    <p>(8:00am to 7:00pm)</p>
                 </China>
                 <Japan>
                 <h2>JAPAN</h2>
                    <p>PHONE: +81 (0)120 988 889</p>
                    <p>Monday to Friday</p>
                    <p>(8:00am to 7:00pm)</p>
                    <p>(JST)</p>
                 </Japan> 
            </SecondContainer>
        </Container>
    );
}

const Container = styled.div`
& a{
    text-decoration: none;
    color: white;
    font-size: 15px;
}

& ul{
    display: flex;
    list-style: none;
    margin: 20px 0;
    position: absolute;
    z-index: 10;
    margin-left: 120px;
}
& .title:after{
    content: '/';
    display: inline-block;
    margin: 0 5px;
}

& h1{
    position: absolute;
    z-index: 10;
    margin-top: 200px;
    margin-left: 150px;
    color: white;
}
`
const FirstContainer = styled.div`
display: flex;
margin-top: 100px;
margin-bottom: 100px;
`

const Content = styled.div`
width: 40%;
padding-left: 150px;
padding-top: 100px;
& p{
    font-family: Roboto,Helvetica Neue,Arial;
}
`
const Image = styled.div`
width: 60%;
`

const SecondContainer = styled.div`
margin-top: 50px;
margin-left: 180px;
display: flex;
flex-wrap: wrap;
& h2{
    margin-bottom: 25px;
}
`

const Internaltional = styled.div`
width: 50%;
`

const North = styled.div`
width: 50%;`

const China = styled.div`
width: 50%;`

const Japan = styled.div`
width: 50%;
`

export default Contact;