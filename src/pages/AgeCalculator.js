import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AgeCalculator = () => {
  const [dob, setDob] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);
  const [result, setResult] = useState();

  const handleDob = (e) => {
    setDob(e.target.value);
  };

  const handleYear = (e) => {
    setCurrentYear(e.target.value);
  };

  const handleResult = () => {
    const birthDate = new Date(dob);
    const today = new Date(currentYear);
    let days = today.getDate() - birthDate.getDate();
    let months = today.getMonth() - birthDate.getMonth();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    setResult(
      `Now your current age is ${calculatedAge} years ${months} months and ${days} days.`
    );
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        backgroundColor: "#ffff",
        height: "60%",
        width: "30%",
        borderRadius:"2%",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
      }}
    >
      <Typography variant="h5" margin={5}>
        Age Calculation
      </Typography>
      <Box style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <Typography margin={1}>Enter DOB: </Typography>
        <TextField
          type="Date"
          onChange={handleDob}
          size="small"
          format="YYYY/MM/DD"
          style={{ marginLeft: 15 }}
        />
      </Box>
      <Box style={{ display: "flex", flexDirection: "row", margin: 10 }}>
        <Typography margin={1}>Current Date: </Typography>
        <TextField onChange={handleYear} size="small" type="Date" />
      </Box>
      {result}
      <Button variant="contained" onClick={handleResult} style={{width:"30%", margin:10}}>
        Submit
      </Button>
    </Box>
  );
};
export default AgeCalculator;
