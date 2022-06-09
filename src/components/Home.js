import React, { useState } from 'react'
import styled,{keyframes} from 'styled-components'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Car1 from "../assets/images/car1.png"
import Car2 from "../assets/images/car2.png"
import Car3 from "../assets/images/car3.png"
import Car4 from "../assets/images/car4.png"
import Huracane from "../assets/images/_cover Huracan_06_20k_m.jpg"

import {useNavigate} from 'react-router-dom'



const sliderData = [
    { image: Car1, title: 'HURACAN STO', description: 'BASED ON A TRUE STORY' },
    { image: Car2, title: 'HURACAN EVO RWD SPYDER', description: 'REWIND TO REAR-WHEEL DRIVE' },
    { image: Car3, title: 'HURACAN EVO RWD', description: 'REWIND TO REAR-WHEEL DRIVE' },
    { image: Car4, title: 'HURACAN EVO SPYDER', description: 'EVERY DAY AMPLIFIED' }
]

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length

    const navigate = useNavigate()

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    const moveDot = index => {
        setCurrentSlide(index)
    }


    return (
        <>
            <Model>
                <h1 style={{ margin: '20px 150px' }}>MODELS</h1>
                <Slider>
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {sliderData.map((slide, index) => {
                        return (
                            <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
                                {
                                    index === currentSlide && (
                                        <>
                                            <Image src={slide.image} alt={slide.title} />
                                            <Content>
                                                <h2>{slide.title}</h2>
                                                <p>{slide.description}</p>
                                            </Content>
                                        </>
                                    )
                                }
                            </div>
                        )
                    })}

                    <ContainerDots>
                        {Array.from({ length: slideLength }).map((item, index) => (
                            <div onClick={() => moveDot(index)} className={currentSlide === index ? "dot active" : "dot"}></div>
                        ))}
                    </ContainerDots>
                </Slider>
            </Model>


            <h1 style={{ marginLeft: '150px', marginTop: '150px' }}>NEWS</h1>
            <h1 style={{ fontSize: '70px', marginLeft: '150px' }}>LAMBORGHINI WORLD</h1>
            <News>
                <Image src={Huracane} />
                <h3>21 APRIL 2022</h3>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '68%' }}>
                        <h3 style={{ fontSize: '30px', fontWeight: 'bolder' }}>HURACAN NUVER 20,000 MARKS MILESTONE</h3>
                        <p>Huracán number 20,000 has just rolled off Automobili Lamborghini’s production line, marking a point in history</p>
                        <p> for the iconic aspirated V10 engine.</p>
                    </div>
                    <ReadMore onClick={()=>navigate("/news")}>READ MORE</ReadMore>
                </div>

                <New>
                    <img src={Huracane} />
                    <NewDetail>
                        <p>14 APRIL 2022</p>
                        <h4>LAMBORGHINI SETS A NEW SALES RECORD IN Q1 2022</h4>
                        <ReadMore onClick={()=>navigate("/news")}>READ MORE</ReadMore>
                    </NewDetail>
                </New>
                <SeeAll onClick={()=>navigate("/news")}>
                    SEE ALL
                </SeeAll>
            </News>

        </>
    );
}

const Model = styled.div`
    background-color: f0f5f5; 
    height: 900px;
`

const Slider = styled.section`
position: relative;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

& .right-arrow{
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #e6e6e6;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    &:hover{
        color: #999999;
    }
  }

  & .left-arrow{
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #e6e6e6;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    &:hover{
        color: #999999;
    }
  }

  & .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  & .slide.active{
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

  & .slide.active.content{
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }

`

const Image = styled.img`
    width: 1000px;
    height: 700px;
    border-radius: 10px;
    margin-top: 50px;
`

const Content = styled.div`
  position: absolute;
  left: 30%;
  top: 20%;
  color: rgba(1,1,1);
  animation: slide-up 1s ease 0.5s;
  animation-fill-mode: forwards;
  
  @keyframes slide-up {
    from {
      visibility: visible;
      top: 30%;
    }
    to {
      visibility: visible;
      top: 20%;
    }
  }

  & p{
      font-style: italic;
  }
`

const ContainerDots = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    & .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid #f1f1f1;
        margin: 0 5px;
        background: #f1f1f1;
      }
    
    & .dot.active {
        background: rgb(32, 32, 32);
      }    
`

const News = styled.div`
    margin-left: 17.5%;
    & h3{
        margin:20px 0;
    }
    & p{
        font-family: sans-serif;
    }

`
const growUp = keyframes`
from{opacity: 0.7;}
to{opacity: 1;}
`

const ReadMore = styled.div`
    display: flex;
    border: 1px solid #ddd;
    width: 215px;
    height: 52px;
    color: #000;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        background-color: #181818;
        color: #fff;
        animation: ${growUp} ease-in 0.2s;
    }
`
const New = styled.div`
    margin-top: 50px;
    display: flex;
    & img{
        width: 500px;
        height: 200px;
    }
`

const NewDetail = styled.div`
    margin-left: 30px;
    width: 40%;

    p{
        margin-top: 0;
        text-transform: uppercase;
        font-size: 1rem;
        opacity: 0.5;
    }

    h4{
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
    }
`

const SeeAll = styled.div`
display: flex;
border: 1px solid #cbcbca;
background-color: black;
color: white;
width: 215px;
height: 52px;
align-items: center;
justify-content: center;
margin: 100px 0;
margin-left: 30%;
cursor: pointer;
&:hover{
    background-color: white;
    color: black;
    animation: ${growUp} ease-in 0.2s;
}

`
export default Home

