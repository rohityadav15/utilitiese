import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Factorial = () => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const factorialValue = (n) => {
    let result = 1;
    for (let i = n; i > 1; i--) {
      result = result * i;
    }
    return result;
  };
  const handleSubmit = () => {
    const r = factorialValue(value);
    setResult(r);
  };

  return (
    <Box
      style={{
        display: "flex",
        width:"30%",
        height:"30%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffff",
        borderRadius: "2%",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
      }}
    >
        <Typography variant="h5" margin={2}>Calulate Factorial</Typography>
      <Box style={{ display: "flex", flexDirection: "row", margin: 3 }}>
        <Typography m={1}>Enter the value: </Typography>
        <TextField label="Enter value" onChange={handleValue} size="small" />
      </Box>
      {result}
      <Box>
        <Button onClick={handleSubmit} style={{backgroundColor:"blue", color:"#ffff"}}>Click</Button>
      </Box>
    </Box>
  );
};
export default Factorial;
