import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PhoneInputWithCountrySelect from "react-phone-number-input";

function SignUp() {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Đăng ký
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        required
                        fullWidth
                        id="username"
                        label="Tên đăng nhập"
                        autoFocus
                        autoComplete='username'
                        margin='normal'/>
                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Mật khẩu"
                        type="password"
                        autoComplete="current-password"
                        margin='normal'/>
                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Nhập lại mật khẩu"
                        type="password"
                        autoComplete="current-password"
                        margin='normal'/>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        autoFocus
                        autoComplete='email'
                        margin='normal'/>
                    <PhoneInputWithCountrySelect/>
                    <Button 
                        variant='contained'
                        fullWidth
                        type="submit"
                        sx={{ mt: 3, mb: 2 }}
                        size="medium"
                    >Đăng ký</Button>
                </Box>
            </Box>
        </Container>
    )
}
export default SignUp