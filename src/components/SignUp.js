import React from "react";
import styled from 'styled-components'
import Button from "@mui/material/Button";

function SignUp() {
    return (
        <SignUpContainer>
            <Title>Đăng ký</Title>
            <InfoContainer>
                <InputText onfocus="this.placeholder=''" onblur="this.placeholder='Tên đăng nhập'" placeholder="Tên đăng nhập"></InputText>
                <InputText onfocus="this.placeholder=''" onblur="this.placeholder='Mật khẩu'" placeholder="Mật khẩu"></InputText>
                <InputText onfocus="this.placeholder=''" onblur="this.placeholder='Nhập lại mật khẩu'" placeholder="Nhập lại mật khẩu"></InputText>
                <InputText onfocus="this.placeholder=''" onblur="this.placeholder='Email'" placeholder="Email"></InputText>
                <Button 
                    variant='contained'
                    type="submit"
                    sx={{ mt: 3, mb: 2 }}
                    size="medium"
                >Đăng ký</Button>
            </InfoContainer>
        </SignUpContainer>
    )
}
const SignUpContainer = styled.div`
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
export default SignUp