import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Todo = () => {
  const [name, setName] = useState("");
  const [student, setStudent] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAdd = () => {
   const formatedData = () => {
      name: name,
      action:"",
    };
    setStudent(formatedData)
  };

  return (
    <Box>
      Todo List
      <Box>
        <TextField size="small" onChange={handleName}></TextField>
        <Button onClick={handleAdd} value={student}>
          Add
        </Button>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr.</TableCell>
                <TableCell>Name </TableCell>
                <TableCell>Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {student.localeCompare((data,i)=>(

                    <TableRow>
                        key=i
                    </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default Todo;
