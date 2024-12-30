import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "90%",
        width: "90%",
      }}
    >
      <Box
        style={{
          display: "flex",
          //   alignItems: "center",
          flexDirection: "row",
          height: "20%",
          width: "50%",
          margin: 5,
          justifyContent: "space-around",
        }}
      >
        <Link
          to="/toDo"
          style={{
            height: "100%",
            width: "30%",
            display: "flex",
            textDecoration:"none",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2%",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Box>Todo</Box>
        </Link>
        <Link
        to="/convetInSentence"
          style={{
            height: "100%",
            width: "30%",
            display: "flex",
            alignItems: "center",
            textDecoration:"none",
            justifyContent: "center",
            borderRadius: "2%",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Box>convert in sentence</Box>
        </Link>
        <Link
        to="/factorial"
          style={{
            height: "100%",
            width: "30%",
            display: "flex",
            alignItems: "center",
            textDecoration:"none",
            justifyContent: "center",
            borderRadius: "2%",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Box>Factorial</Box>
        </Link>
        </Box>
      <Box
        style={{
          display: "flex",
          //   alignItems: "center",
          flexDirection: "row",
          height: "20%",
          width: "50%",
          margin: 5,
          justifyContent: "space-around",
        }}
      >
        <Link
        to="/ageCalculator"
          style={{
            height: "100%",
            width: "30%",
            textDecoration:"none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2%",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Box>Age calcultor</Box>
        </Link>
        <Link
        to="/unitConversion"
          style={{
            height: "100%",
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2%",
            textDecoration:"none",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Box>Unit Conversion</Box>
        </Link>
        <Link
        to="/numberToWord"
          style={{
            height: "100%",
            textDecoration:"none",
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2%",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Box>Number to word</Box>
        </Link>
      </Box>
    </Box>
  );
};
export default Home;
