import { Box } from "@mui/material";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Factorial from "./pages/Factorial";

function App() {
  return (
    <Router>
      <Box>
        <nav>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/toDo" style={{ color: "white", textDecoration: "none" }}>
            Todo
          </Link>
          <Link
            to="/factorial"
            style={{ color: "white", textDecoration: "none" }}
          >
            Factorial
          </Link>
        </nav>
      </Box>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toDo" element={<Todo />} />
          <Route path="/factorial" element={<Factorial />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
