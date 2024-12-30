import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Factorial = () => {
    const [value, setValue]= useState(0);

    const handleValue=(e)=>{
        setValue(e.target.value)
    }
    

  return (
    <Box>
      <Box style={{display:"flex",flexDirection:"row"}}>
        <Typography m={1}>Enter the value: </Typography>
        <TextField
          label="Enter value"
          onChange={handleValue}
          size="small"
        />
      </Box> 
    </Box>
  );
};
export default Factorial;
