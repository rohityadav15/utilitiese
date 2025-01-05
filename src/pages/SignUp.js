import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const SignUp = () => {
  const [name, setname] = useState("");
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [signUp, setSignUp] = useState();
  const [showPassword, setShowPassword] = useState();
  const [showConfirmPassword, setShowConfirmPassword] = useState();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleName = (e) => {
    setname(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSignUp = () => {
    if (
      name === "" ||
      contact === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Fill all the fieled compulsory");
    } else {
      if (password === confirmPassword && password.length >= 8) {
        if (contact.length === 10) {
          const personData = {
            name,
            contact,
            email,
            password,
            confirmPassword,
          };
          localStorage.setItem("user", JSON.stringify(personData));

          alert("You have signup successfully");
        } else {
          alert("Contact length should be atleast 10 digit");
        }
      } else {
        alert(
          "Password and confirm password should be same and password length shoul be greater than or equal to 8"
        );
      }
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "68%",
        width: "50%",
        flexDirection: "column",
        backgroundColor: "#ffff",
        borderRadius: "2%",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" marginBottom={3}>
          New registration
        </Typography>
        <Box style={{ display: "flex", flexDiretion: "row" }}>
          <Typography marginTop={1.5}>Name: </Typography>
          <TextField
            size="small"
            onChange={handleName}
            style={{ display: "flex", margin: 5, marginLeft: 100 }}
          />
        </Box>
        <Box style={{ display: "flex", flexDiretion: "row" }}>
          <Typography marginTop={1.5}>Contact:</Typography>
          <TextField
            size="small"
            type="number"
            onChange={handleContact}
            style={{ margin: 5, marginLeft: 87 }}
          />
        </Box>
        <Box style={{ display: "flex", flexDiretion: "row" }}>
          <Typography marginTop={1.5}>Email:</Typography>
          <TextField
            size="small"
            onChange={handleEmail}
            style={{ margin: 5, marginLeft: 101 }}
          />
        </Box>
        <Box style={{ display: "flex", flexDiretion: "row" }}>
          <Typography marginTop={1.5}>Create Password:</Typography>
          <TextField
            size="small"
            type={showPassword ? "text" : "password"}
            onChange={handlePassword}
            style={{ margin: 5, marginLeft: 18, width: "225px" }}
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
        <Box style={{ display: "flex", flexDiretion: "row" }}>
          <Typography marginTop={1.5}>Confirm Password:</Typography>
          <TextField
            size="small"
            type={showConfirmPassword ? "text" : "password"}
            onChange={handleConfirmPassword}
            style={{
              display: "flex",
              margin: 5,
              marginLeft: 10,
              width: "225px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowConfirmPassword} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button
          onClick={handleSignUp}
          variant="contained"
          style={{ marginTop: 10 }}
        >
          SignUp
        </Button>
      </Box>
    </Box>
  );
};
export default SignUp;
