import React from 'react'
import styled from 'styled-components'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";


function Footer() {
  return (
    <FooterContainer>
      <FooterRow>
        <FooterInfoCol>
          <FooterInfo href='/introduction'>
            Doanh nghiệp
          </FooterInfo>
          <FooterInfo href='#'>
            Tuyển dụng
          </FooterInfo>
          <FooterInfo href='/contact'>
            Liên hệ
          </FooterInfo>
          <FooterInfo href='/news'>
            Truyền thông
          </FooterInfo>
          <FooterInfo href='#'>
            Chính sách
          </FooterInfo>
        </FooterInfoCol>
        <FooterIconCol>
          <FooterIcon href='#'>
            <AiOutlineInstagram />
          </FooterIcon>
          <FooterIcon href='#'>
            <AiOutlineYoutube />
          </FooterIcon>
          <FooterIcon href='#'>
            <FiFacebook />
          </FooterIcon>
          <FooterIcon href='#'>
            <FiTwitter />
          </FooterIcon>
        </FooterIconCol>
      </FooterRow>
      <FooterCopyright>
        <FooterCopyrightInfo>
           &copy; {new Date().getFullYear()} Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.
        </FooterCopyrightInfo>
        <FooterCopyrightInfo>
          All rights reserved. VAT no. IT 00591801204
        </FooterCopyrightInfo>
      </FooterCopyright>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
margin-top: 100px;
background-color: #181818;
color: #fff;
position: relative;
bottom: 0;
padding: 58px;
@media (max-width: 739px) {
  padding: 30px;
}
`
const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 739px) {
    flex-direction: column;
}
`
const FooterInfoCol = styled.div`
  display:flex;
  @media (max-width: 739px) {
    flex-wrap: wrap;
  }
`

const FooterIconCol = styled.div`
  display: flex;
  @media (max-width: 400px) {
    margin-top: 10px;
  }
`

const FooterIcon = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color:#fff;
  padding-left: 20px;
  @media (max-width: 739px) {
    padding-left: 0px;
    padding-right: 20px;
    font-size: 2.2rem;
  }
`

const FooterInfo = styled.a`
  text-transform: uppercase; 
  font-weight: 400;
  padding-right: 30px;
  text-decoration: none;
  color: #fff;
  @media (max-width: 739px) {
    width: 50%;
    font-size: 1rem;
    padding-right: 0;
    padding: 8px 0;;
}
`

const FooterCopyright = styled.div`
  margin-top: 30px;
`

const FooterCopyrightInfo = styled.div``
export default Footer