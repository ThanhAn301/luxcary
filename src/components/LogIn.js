import React from 'react'
import styled from 'styled-components'

function LogIn() {
    return (
        <LogInContainer>
            <Title>Đăng nhập</Title>
            <InfoContainer>
                <InputText onfocus="this.placeholder=''" onblur="this.placeholder='Tên đăng nhập'" placeholder="Tên đăng nhập"></InputText>
                <InputText onfocus="this.placeholder=''" onblur="this.placeholder='Mật khẩu'" placeholder="Mật khẩu"></InputText>
                <SubmitButton>Đăng nhập</SubmitButton>
            </InfoContainer>
        </LogInContainer>
    )
}

const LogInContainer = styled.div`
    margin: 50px auto;
    border: 1px solid black;
    border-radius: 20px;
    width: 40%;
`

const Title = styled.h2`
    text-align: center;
`

const InfoContainer = styled.form`
    display: flex;
    flex-direction: column;

`

const InputText = styled.input`
    margin: 5px auto;
    height: 30px;
    width: 60%;
    border: 1px solid #1eabc3;
    border-radius: 5px;
`

const SubmitButton = styled.button`
    background-color: #1eabc3;
    width: 20%;
    height: 10%;
    border: 1px white;
`
export default LogIn