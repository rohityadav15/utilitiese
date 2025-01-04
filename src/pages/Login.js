import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SAVED_EMAIL = "rohit.yadav102002@gmail.com";
const SAVED_PASSWORD = "12345";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [logIn, setLogIn] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirm = () => {
    setConfirmPassword((prev) => !prev);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirm(e.target.value);
  };

  const handleLogin = () => {
    if (email === "" || password === "" || confirm === "") {
      alert("All field must be required");
    } else {
      if (password === confirm && password.length >= 5) {
        if (email === SAVED_EMAIL && password === SAVED_PASSWORD) {
          alert("You have logedin");
        } else {
          alert("Your email and password not matched");
        }
      } else {
        alert(
          "Password and confirm password should be same and greater than or equal to 5"
        );
      }
    }
    setLogIn(email || password);
    console.log(email, password, confirm);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "50%",
        backgroundColor: "#ffff",
        borderRadius: "2%",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 4,
        }}
      >
        <Typography margin={1}>Enter your email : </Typography>
        <TextField
          size="small"
          label="Enter email"
          value={email}
          onChange={handleEmail}
          style={{ marginLeft: 20 }}
        />
      </Box>
      <Box style={{ display: "flex", flexDirection: "row", margin: 4 }}>
        <Typography margin={1}>Enter password : </Typography>
        <TextField
          size="small"
          type={showPassword ? "text" : "password"}
          label="Enter password"
          value={password}
          onChange={handlePassword}
          style={{ marginLeft: 25, width: "225px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box style={{ display: "flex", flexDirection: "row", margin: 4 }}>
        <Typography margin={1}>Conferm password : </Typography>
        <TextField
          size="small"
          type={confirmPassword ? "text" : "password"}
          label="Confirm password"
          value={confirm}
          onChange={handleConfirmPassword}
          style={{ marginLeft: 3, width: "225px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowConfirm} edge="end">
                  {confirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 4,
          marginTop: 10,
        }}
      >
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
      {logIn}
    </Box>
  );
};
export default Login;
