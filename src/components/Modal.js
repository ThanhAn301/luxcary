import React from 'react'
import styled,{ keyframes } from 'styled-components'
import { FaTimes } from "react-icons/fa";

function Modal({ closeModal }) {
  return (
    <ModalSearch>
      <ModalSearchOverlay></ModalSearchOverlay>
      <ModalSearchBody>
        <ModalSearchContainer>
          <ModalHeader>
            <ModalSearchBodyBrand>LAMBORGHINI</ModalSearchBodyBrand>
            <CloseButton onClick={()=>closeModal(false)}>
              <CloseText>Close </CloseText>
              <CloseIcon>
                <FaTimes />
              </CloseIcon>
            </CloseButton>
          </ModalHeader>
          <ModalSearchBodyLabel>SEARCH IN THE WEBSITE</ModalSearchBodyLabel>
          <ModalSearchBodyForm>
            <ModalSearchInput
              placeholder='Search on Lamborghini.com'
            ></ModalSearchInput>
            <ModalSearchText>Search</ModalSearchText>
          </ModalSearchBodyForm>
        </ModalSearchContainer>
      </ModalSearchBody>
    </ModalSearch>
  )
}

const growUp = keyframes`
  from{opacity: 0;}
  to{opacity: 1;}
`

const ModalSearch = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  animation: ${growUp} 0.3s ease-in;
`

const ModalSearchOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`

const ModalSearchBody = styled.div`
position: relative;
background-color: #181818;
color:#fff;
height: 100%;
width: 100%;
margin-top: 92px;
z-index: 1;
@media (max-width: 739px) {
  margin-top:60px;
}
`
const ModalSearchContainer = styled.div`
position: absolute;
margin-top: 16px;
margin-left: 130px;
@media (max-width: 739px) {
  margin-left: 20px;
  margin-right: 20px;
  padding-top:70px;
}
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const CloseButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

`

const CloseText = styled.span`
  font-size: 1.8rem;
  padding-right: 5px;
  @media (max-width: 739px) {
    font-size:1.5rem;
  }
`

const CloseIcon = styled.div`
  display:flex;
  align-items: center;
  font-size: 1.8rem;
`

const ModalSearchBodyBrand = styled.div`
  font-size: 1.9rem;
  font-weight: 600;
  @media (max-width: 739px) {
    font-size:1rem;
    font-weight: 400;
  }
`

const ModalSearchBodyLabel = styled.div`
  margin-top: 10px;
  margin-bottom: 240px;
  font-size: 6.4rem;
  font-weight: 600;
  @media (max-width: 739px) {
    font-size:2.3rem;
    margin-bottom: 150px;
  }
  
`

const ModalSearchBodyForm = styled.div`
  display: flex;
  align-items:center;
`

const ModalSearchInput = styled.input`
  outline:none;
  width:80%;
  height: 45px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-style: 2px solid black;
  border-radius: 5px;
  font-size: 1.4rem;
  ::placeholder {
    font-size: 1.4rem;
  }


`

const ModalSearchText = styled.span`
  margin-left: 10px;
  font-size: 1.7rem;
  @media (max-width: 739px) {
    font-size: 1.2rem;
    font-weight: 400;
  }
`



export default Modal
