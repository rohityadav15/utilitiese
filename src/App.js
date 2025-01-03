import { Box } from "@mui/material";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Factorial from "./pages/Factorial";
import AgeCalculator from "./pages/AgeCalculator";
import UnitConversion from "./pages/UnitConversion";
import NumberToWord from "./pages/NumberToWord";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
        <Box>
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              // width: "90%",
              alignItems: "center",
              // justifyContent:"center",
              backgroundColor: "black",
              padding: 8,
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/ageCalculator" style={{ color: "white", textDecoration: "none" }}>
              Age Calculator
            </Link>
            <Link to="/unitConversion" style={{ color: "white", textDecoration: "none" }}>
              Unit Conversion
            </Link>
            <Link
              to="/toDo"
              style={{ color: "white", textDecoration: "none" }}
            >
              Todo
            </Link>
            <Link
              to="/factorial"
              style={{ color: "white", textDecoration: "none" }}
            >
              Factorial
            </Link>
            <Link
              to="/numberToWord"
              style={{ color: "white", textDecoration: "none" }}
            >
              Number To word
            </Link>
            <Link
              to="/logIn"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          </nav>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            width: "215vh",
            height:"90vh",
            margin:"1%",
            borderRadius:"2%",
            backgroundColor: "lightblue",
            boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/factorial" element={<Factorial />} />
            <Route path="/toDo" element={<Todo />} />
            <Route path="/ageCalculator" element={<AgeCalculator />} />
            <Route path="/unitConversion" element={<UnitConversion />} />
            <Route path="/numberToWord" element={<NumberToWord />} />
            <Route path="/logIn" element={<Login/>} />
          </Routes>
        </Box>
      </Router>
  );
}

export default App;
