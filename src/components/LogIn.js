import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();
  useEffect(() => {
    const login_ed = localStorage.getItem("user");
    if (login_ed != null) {
      navigate("/home");
    }
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const login_ed = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
    navigate("/home");
    localStorage.setItem("user", login_ed);
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "70vh",
      }}
    >
      <Box
        sx={{
          paddingTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Đăng nhập
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Tên đăng nhập"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng nhập
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default LogIn;
