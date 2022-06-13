import React, { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import LogoCar from "../assets/images/logo-car.webp";
import Aventador1 from "../assets/images/aventador-1.jpg";
import Aventador2 from "../assets/images/aventador-2.jpg";

function Navbar({ toggleModal }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <Logo>
            <Link to="/">
              <img src={LogoCar} alt="logo car" />
            </Link>
          </Logo>
          <NavbarOption>
            <NavbarOptionItem>
              <Link to="/">LOẠI XE</Link>
              <Aside>
                <AsideCarOptions>
                  <AsideCarName>
                    <div style={{ color: "white" }}>AVENTADOR</div>
                    <AsideCarNameDetail>
                      <AsideCarNameDetailItems>
                        <AsideCarNameDetailItem>
                          <a href="/hi">AVENTADOR 1</a>
                          <AsideCarImg>
                            <img src={Aventador1} alt="car" />
                          </AsideCarImg>
                        </AsideCarNameDetailItem>
                        <AsideCarNameDetailItem>
                          <a href="">AVENTADOR 2</a>
                          <AsideCarImg>
                            <img src={Aventador2} alt="car" />
                          </AsideCarImg>
                        </AsideCarNameDetailItem>
                        <AsideCarNameDetailItem>
                          <a href="">AVENTADOR 3</a>
                        </AsideCarNameDetailItem>
                        <AsideCarNameDetailItem>
                          <a href="">AVENTADOR 4</a>
                        </AsideCarNameDetailItem>
                      </AsideCarNameDetailItems>
                    </AsideCarNameDetail>
                  </AsideCarName>
                  <AsideCarName>
                    <div style={{ color: "white" }}>HURACAN</div>
                    <AsideCarNameDetail>
                      <AsideCarNameDetailItems>
                        <AsideCarNameDetailItem>
                          <a href="">HURACAN 1</a>
                        </AsideCarNameDetailItem>
                        <AsideCarNameDetailItem>
                          <a href="">HURACAN 2</a>
                        </AsideCarNameDetailItem>
                        <AsideCarNameDetailItem>
                          <a href="">HURACAN 3</a>
                        </AsideCarNameDetailItem>
                        <AsideCarNameDetailItem>
                          <a href="">HURACAN 4</a>
                        </AsideCarNameDetailItem>
                      </AsideCarNameDetailItems>
                    </AsideCarNameDetail>
                  </AsideCarName>
                  <AsideCarName>
                    <div style={{ color: "white" }}>URUS</div>
                  </AsideCarName>
                </AsideCarOptions>
              </Aside>
            </NavbarOptionItem>
            <NavbarOptionItem>
              <Link to="/shop">CỬA HÀNG</Link>
              <Aside2>
                <Aside2StoreOptions>
                  <Aside2StoreLabel>
                    <a href="">THỜI TRANG</a>
                  </Aside2StoreLabel>
                  <Aside2StoreLabel>
                    <a href="">PHỤ KIỆN</a>
                  </Aside2StoreLabel>
                  <Aside2StoreLabel>
                    <a href="">KHUYẾN MÃI</a>
                  </Aside2StoreLabel>
                </Aside2StoreOptions>
              </Aside2>
            </NavbarOptionItem>
            <NavbarOptionItem>
              <Link to="/">BẢO HÀNH</Link>
              <Aside3>
                <Aside3ServiceOptions>
                  <Aside3ServiceLabel>
                    <a href="">HỖ TRỢ SỬA CHỮA</a>
                  </Aside3ServiceLabel>
                  <Aside3ServiceLabel>
                    <a href="">DỊCH VỤ TÀI CHÍNH</a>
                  </Aside3ServiceLabel>
                </Aside3ServiceOptions>
              </Aside3>
            </NavbarOptionItem>
          </NavbarOption>
        </NavbarLeft>
        <NavbarRight>
          <NavbarOptionRight>
            <NavbarOptionRightItem>
              <Link to="/introduction">GIỚI THIỆU</Link>
            </NavbarOptionRightItem>
            <NavbarOptionRightItem>
              <Link to="/news">TIN TỨC</Link>
            </NavbarOptionRightItem>
            <NavbarOptionRightItem>
              <Link to="/contact">LIÊN HỆ</Link>
            </NavbarOptionRightItem>
          </NavbarOptionRight>
          <NavbarRightIcons>
            <NavbarIcon onClick={() => toggleModal(true)}>
              <AiOutlineSearch size={30} />
            </NavbarIcon>
            <NavbarIcon>
              <RiAccountCircleFill size={30} />
            </NavbarIcon>
          </NavbarRightIcons>
          <NavbarIconMenu onClick={() => setOpenMenu(true)}>
            <AiOutlineMenu />
          </NavbarIconMenu>
        </NavbarRight>
      </NavbarContainer>
      {openMenu && (
        <NavbarMobile>
          <NavbarOverlay></NavbarOverlay>
          <NavbarMobileContainer>
            <CloseIcon onClick={() => setOpenMenu(false)}>
              <FaTimes />
            </CloseIcon>
            <NavbarMobileList>
              <NavbarMobileOption>
                <a href="#">LOẠI XE</a>
              </NavbarMobileOption>
              <NavbarMobileOption>
                <a href="#">CỬA HÀNG</a>
              </NavbarMobileOption>
              <NavbarMobileOption>
                <a href="#">BẢO HÀNH</a>
              </NavbarMobileOption>
              <NavbarMobileOption>
                <a href="#">GIỚI THIỆU</a>
              </NavbarMobileOption>
              <NavbarMobileOption>
                <a href="#">TIN TỨC</a>
              </NavbarMobileOption>
            </NavbarMobileList>
          </NavbarMobileContainer>
        </NavbarMobile>
      )}
    </>
  );
}

const growDown = keyframes`
from{
    height: 0%;
}
to{
    height: 100%;
}
`;

const growUp = keyframes`
from{opacity: 0;}
to{opacity: 1;}
`;

const NavbarContainer = styled.div`
  width: 100%;
  height: 92px;
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 739px) {
    height: 60px;
  }
  z-index: 999999999;
`;
const NavbarLeft = styled.div`
  display: flex;
  margin-left: 60px;
  @media (max-width: 739px) {
    margin-left: 20px;
  }
`;

const Logo = styled.div`
  img {
    width: 60px;
    height: 66px;
  }
  @media (max-width: 739px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const NavbarOption = styled.ul`
  display: flex;
  margin-top: 26px;
  @media (max-width: 739px) {
    display: none;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 739px) {
    padding-right: 15px;
  }
`;

const NavbarOptionRight = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 739px) {
    display: none;
  }
`;

const NavbarOptionRightItem = styled.li`
  position: relative;
  margin: 0 13px;
  a {
    text-decoration: none;
    color: #e2f4da;
    list-style: none;
  }

  &:after {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    content: "";
    display: block;
    background-color: #fff;
    height: 1px;
    width: 0;
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

const NavbarRightIcons = styled.div`
  margin: 0 50px;
  display: flex;
  color: #bababa;
  @media (max-width: 739px) {
    margin-right: 10px;
  }
`;
const NavbarIcon = styled.div`
  margin: 0 13px;

  &:hover {
    color: #e2f4da;
    cursor: pointer;
  }
`;

const Aside = styled.div`
  position: absolute;
  width: 100vw;
  top: 55px;
  left: -173px;
  background-color: #181818;
  animation: ${growDown} 0.05s ease-in;
  display: none;
  z-index: 999;
`;

const AsideCarOptions = styled.ul`
  padding: 0;
  margin: 4px 0px 40px 173px;
`;

const AsideCarNameDetail = styled.div`
  position: absolute;
  top: 3px;
  left: 300px;
  display: none;
`;

const AsideCarNameDetailItems = styled.ul``;

const AsideCarImg = styled.div`
  position: absolute;
  top: 0px;
  left: 200px;
  display: none;
  animation: ${growUp} ease-in 0.5s;
  img {
    height: 100px;
    width: 200px;
  }
`;
const AsideCarNameDetailItem = styled.li`
  list-style: none;
  margin-bottom: 12px;

  a {
    color: #e2f4da;
  }

  &:hover {
    a {
      color: #bababa;
    }
    ${AsideCarImg} {
      display: block;
    }
  }
`;
const Aside2 = styled.div`
  position: absolute;
  width: 100vw;
  top: 55px;
  left: -263px;
  background-color: #181818;
  animation: ${growDown} ease-in 0.05s;
  display: none;
  z-index: 999;
`;

const Aside2StoreOptions = styled.ul`
  padding: 0;
  margin: 4px 0px 40px 255px;
`;

const Aside3 = styled.div`
  position: absolute;
  width: 100vw;
  top: 55px;
  left: -373px;
  background-color: #181818;
  animation: ${growDown} ease-in 0.05s;
  display: none;
  z-index: 999;
`;

const NavbarOptionItem = styled.li`
  position: relative;
  list-style: none;
  margin: 0 13px;
  padding: 0;
  display: flex;
  &:before {
    content: "";
    position: absolute;
    top: 10px;
    width: 100%;
    height: 50px;
  }

  &:after {
    position: absolute;
    top: calc(100%);
    left: 0;
    content: "";
    display: block;
    background-color: #fff;
    height: 1px;
    width: 0;
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
    }
    > ${Aside} {
      display: block;
    }
    > ${Aside2} {
      display: block;
    }
    > ${Aside3} {
      display: block;
    }
  }

  a {
    text-decoration: none;
    color: #e2f4da;
  }
`;

const Aside2StoreLabel = styled.li`
  list-style: none;
  margin-bottom: 25px;
  a {
    color: #bababa;
  }

  &:hover {
    a {
      color: #e2f4da;
    }
  }
`;

const Aside3ServiceOptions = styled.ul`
  padding: 0;
  margin: 4px 0px 40px 364px;
`;

const Aside3ServiceLabel = styled.li`
  list-style: none;
  margin-bottom: 25px;
  a {
    color: #bababa;
  }
  &:hover {
    a {
      color: #e2f4da;
    }
  }
`;

const AsideCarName = styled.li`
  list-style: none;
  margin-bottom: 25px;

  a {
    color: #bababa;
  }

  &:hover {
    a {
      color: #e2f4da;
    }
    > ${AsideCarNameDetail} {
      display: block;
    }
  }
`;

const NavbarIconMenu = styled.div`
  color: #fff;
  font-size: 2rem;
  display: none;

  @media (max-width: 739px) {
    display: block;
  }
`;

const NavbarMobile = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  @media (max-width: 739px) {
    display: block;
  }
`;

const NavbarOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const NavbarMobileContainer = styled.div`
  width: 70%;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #181818;
  animation: ${growUp} 0.2s ease-in;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 2rem;
`;

const NavbarMobileList = styled.ul`
  list-style: none;
  color: #fff;
  padding: 50px 30px 0 20px;
`;

const NavbarMobileOption = styled.li`
  padding: 10px 0 10px 0;
  font-size: 1.35rem;
  font-weight: 400;
  a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    opacity: 50%;
  }
`;
export default Navbar;
