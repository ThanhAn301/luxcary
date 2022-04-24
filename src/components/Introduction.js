import React from "react";
import styled from "styled-components";
import Map,{Marker,ScaleControl} from 'react-map-gl';

function Introduction() {
    return (
        <Container>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li className="title">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Company</a>
                    </li>
                </ul>
                <hr></hr>
            </div>

            <h1 className="firstTitle">AUTOMOBILI</h1>
            <h1 className="lastTitle">LAMBORGHINI</h1>

            <Profile>
                <h2>COMPANY PROFILE</h2>
                <p>Automobili Lamborghini S.p.A.</p>
                <p>Founded in 1963, Automobili Lamborghini is headquartered in Sant’Agata Bolognese, in Northern Italy. </p>
                <p>Lamborghini currently produces two super sports car models, the V12-powered Aventador, launched in 2011, and the V10-powered Huracán, launched in 2014, along with the Urus Super SUV powered by a twin-turbo V8 engine, launched in 2017.</p>
                <p>For over half a century Automobili Lamborghini created a continuous series of dream cars, including the 350 GT, Miura, Espada, Countach, Diablo, and Murciélago, as well as limited editions such as the Reventón, Sesto Elemento, Veneno and
                    the Centenario. With the unveiling in 2019 of the Lamborghini Sián FKP 37, a few-off build of only 63 units, the company delivers unique new hybrid technologies, featuring the world-first application of a supercapacitor for hybridization, new materials technology, and unsurpassed Lamborghini performance.</p>
                <p>In 2021 Lamborghini dedicated itself to the Countach for its 50th anniversary. A limited and futuristic edition of the super sports car, the iconic Countach LPI 800-4 boasts a revolutionary design and is a technology rule-breaker</p>
            </Profile>

            <Data>
                <h3>Company Data</h3>
                <p>
                    Automobili Lamborghini S.p.A., with legal seat in S. Agata Bolognese (BO) 40019 Via Modena 12 Italy
                    <br></br>
                    Business Register of Bologna  no. 259882<br></br>
                    Share capital duly paid up Euros 130.000.000<br></br>
                    P Iva 00591801204  Fiscal code 03049840378<br></br>
                    A sole shareholder company part of Audi Group<br></br>
                    Registered email address: <a href=""> automobililamborghini@legalmail.it </a>
                </p>
            </Data>

            <hr></hr>

            <HeadQuaters>
                <h2>HEADQUATERS</h2>
                <h4>Automobili Lamborghini S.p.A.</h4>
                <h4>Via Modena, 12</h4>
                <h4>PHONE: +39 051 959.7611</h4>
            </HeadQuaters>


            <h1 className="board_mng">BOARD MANAGEMENT</h1>
            <Chaiman>
                <Img src="winkelman_12_01.webp" />
                <div>
                    <h3>STEPHAN WINKELMANN </h3>
                    <h4>Chairman & Chief Executive Officer</h4>
                    <p>Stephan Winkelmann was born in Berlin on the 18 October 1964 and grew up in Rome, Italy. <br></br>
                        He studied political science in Rome and took his degree in Munich. In 1991 he started his
                        professional career at a German financial institution before moving to the automotive industry,
                        working firstly for Mercedes-Benz and then for Fiat Auto from 1994 to 2004, until he was appointed CEO of Fiat Auto Austria,
                        Switzerland and Germany. Stephan Winkelmann was President and CEO of Automobili Lamborghini S.p.A from 2005 to 2016. In March 2016,
                        he became CEO of Quattro GmbH (today Audi Sport GmbH) before joining Bugatti Automobiles S.A.S. as President from the beginning of 2018 until November 2021.<br></br>
                        Winkelmann returned to Lamborghini as President and CEO on 1 December 2020.</p>
                </div>
            </Chaiman>
            <hr></hr>

            <div class="container" style={{marginLeft: '180px'}}>
                <div class="row">
                    <div class="col-sm">
                        <img className='image' src="poma.webp"/>
                        <p className="Name">PAOLO POMA</p>
                        <p className="role">Chief Financial Officer</p>
                    </div>
                    <div class="col-sm">
                        <img className='image' src="poma.webp"/>
                        <p className="Name">PAOLO POMA</p>
                        <p className="role">Chief Financial Officer</p>
                    </div>
                    <div class="col-sm">
                        <img className='image' src="poma.webp"/>
                        <p className="Name">PAOLO POMA</p>
                        <p className="role">Chief Financial Officer</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
background-repeat: no-repeat;
background-image: url(company-left.webp);  
background-size: 500px 600px;
background-position: right 30%;

& ul{
    margin-top: 20px;
    display: flex;
}

& ul li a{
    text-decoration: none;
    color: black;
}
& .title:after{
    content: '/';
    display: inline-block;
    margin: 0 5px;
}


& .firstTitle{
    margin: 80px 0px 0px 100px;
}

& .lastTitle{
    margin-left: 200px;
    font-weight: 10;
    font-size: 25px;
    color: white;
    background-color: black; 
    width: 200px;
    text-align: center;
}


& .board_mng{
    margin: 100px auto;
    padding: 30px 0;
    background-color: #e6e6e6;
    text-align: center;
    font-size: 25px;
}

& .image{
    width: 50%;
    position: relative;
}

& .Name{
    height: 50px;
    color: white;
    background-color: black;
    text-align:center;
    padding: 2px;
    width: 15%;
    position: absolute;
    margin-top: -30px;
}

& .role{
    text-align:center;
    background-color: #e6e6e6;
    font-style: italic;
    width: 15%;
    position: absolute;
}
`

const Profile = styled.div`
margin: 150px 0px 0px 100px;
width: 50%;
& p{
    opacity: 0.8;
}
`

const Data = styled.div`
margin: 150px 0px 0px 100px;

& p{
    opacity: 0.8;
}

& a{
    text-decoration: none;
    color: black;
    font-weight: bold;
}
& a:hover{
    text-decoration: underline;
}
`

const HeadQuaters = styled.div`
margin-top: 100px;
text-align: center;
`

const Chaiman = styled.div`
margin: 0 200px;
display: flex;
margin-top: -60px;


& h3{
    background-color: black;
    color: white;
    padding: 15px 10px;
    width: 250px;
    font-size: 20px;
}

& h4{
    font-style: italic;
    font-weight: normal;
}
& div p{
    font-family: Open Sans;
    font-weight: 300;
}
`

const Img = styled.img`
width: 18%;
margin-right: 100px;
`

export default Introduction;