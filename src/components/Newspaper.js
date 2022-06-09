import { NewsData } from './NewsData'
import styled,{keyframes} from 'styled-components'
import Breadcrumbs from './Breadcrumbs';
import {useNavigate} from 'react-router-dom'
import Huracane from "../assets/images/_cover Huracan_06_20k_m.jpg"



function Newspaper() {
    const navigate = useNavigate();
    return (
        <NewspaperContainer>
            <BreadcrumbsContainer>
                <Breadcrumbs />
            </BreadcrumbsContainer>
            <NewspaperHeader>
                <NewspaperInfo>NEWS</NewspaperInfo>
                <NewspaperTitle>LAMBORGHINI WORLD</NewspaperTitle>
            </NewspaperHeader>
            <NewsList>
                {
                    NewsData.map((news, index) => {
                        return (
                            <NewsContainer key={index}>
                                <NewsThumb>
                                    <img src={Huracane} alt="thumb" />
                                </NewsThumb>
                                <NewsInfoWrap>
                                    <NewsDate>
                                        {news.date}
                                    </NewsDate>
                                    <NewsTitle>
                                        {news.title}
                                    </NewsTitle>
                                    <Button onClick={()=>navigate(`${news.path}`)}>
                                        <span>Read More</span>
                                    </Button>
                                </NewsInfoWrap>
                            </NewsContainer>
                        );
                    })
                }
            </NewsList>
        </NewspaperContainer>
    )
}

const NewspaperContainer = styled.div`
    margin: 35px 125px;
    width: 80%;
`

const BreadcrumbsContainer = styled.div`
`

const NewspaperHeader = styled.div``

const NewspaperInfo = styled.h3`
    margin-top: 57px;
    margin-bottom: 20px;
    font-size: 1.6rem;
    font-weight: 700;
`

const NewspaperTitle = styled.h1`
    margin: 0;
    font-size: 6rem;
`

const NewsList = styled.div`

`

const NewsContainer = styled.div`
    display: flex;
    margin-top: 62px;
    box-sizing: border-box;
    max-height: 260px;
`

const NewsThumb = styled.div`
    width: 50%;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const NewsInfoWrap = styled.div`
    flex: 1;
    margin-left: 42px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`


const NewsTitle = styled.div`
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
`

const NewsDate = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    opacity: 0.5;
`
const growUp = keyframes`
from{opacity: 0.7;}
to{opacity: 1;}
`


const Button = styled.div`
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

export default Newspaper
