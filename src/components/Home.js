
import React, { useState } from 'react'
import styled from 'styled-components'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { style } from '@mui/system';


const sliderData = [
    { image: 'car1.png', title: 'HURACAN STO', description: 'BASED ON A TRUE STORY' },
    { image: 'car2.png', title: 'HURACAN EVO RWD SPYDER', description: 'REWIND TO REAR-WHEEL DRIVE' },
    { image: 'car3.png', title: 'HURACAN EVO RWD', description: 'REWIND TO REAR-WHEEL DRIVE' },
    { image: 'car4.png', title: 'HURACAN EVO SPYDER', description: 'EVERY DAY AMPLIFIED' }
]

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length

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
                <Image src='_cover Huracan_06_20k_m.jpg' />
                <h3>21 APRIL 2022</h3>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '68%' }}>
                        <h3 style={{ fontSize: '30px', fontWeight: 'bolder' }}>HURACAN NUVER 20,000 MARKS MILESTONE</h3>
                        <p>Huracán number 20,000 has just rolled off Automobili Lamborghini’s production line, marking a point in history</p>
                        <p> for the iconic aspirated V10 engine.</p>
                    </div>
                    <ReadMore>READ MORE</ReadMore>
                </div>

                <New>
                    <img src='_cover Huracan_06_20k_m.jpg' />
                    <NewDetail>
                        <p>14 APRIL 2022</p>
                        <h4>LAMBORGHINI SETS A NEW SALES RECORD IN Q1 2022</h4>
                        <ReadMore>READ MORE</ReadMore>
                    </NewDetail>
                </New>
                <SeeAll>SEE ALL</SeeAll>
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

const ReadMore = styled.div`
border: 1px solid #cbcbca;
width: 150px;
height: 50px;
text-align: center;
justify-content: center;
padding: 10px;
margin-top: 30px;
&:hover{
    background-color: black;
    color: white;
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
`

const SeeAll = styled.div`
border: 1px solid #cbcbca;
background-color: black;
color: white;
width: 150px;
height: 50px;
text-align: center;
padding: 10px;
margin: 100px 0;
margin-left: 30%;
&:hover{
    background-color: white;
    color: black;
}
`
export default Home

