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
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    if (name) {
      const objec = { name: name, id: students.length + 1 };
      const cloneStudents = [...students];
      cloneStudents.push(objec);
      setStudents(cloneStudents);
      setName("");
    } else {
      alert("Data is Empty");
    }
  };

  const handleDelete = (deleteId) => {
    const cloneStudent = [...students];
    const filteredData = cloneStudent.filter((student) => {
      return student.id !== deleteId;
    });

    setStudents(filteredData);
  };

  const handleUpdate = () => {
    const cloneStudents = [...students];
    cloneStudents[editingId - 1].name = name;
    setStudents(cloneStudents);
    setName("");
    setIsEditing(false);
  };

  const handleEdit = (id) => {
    const cloneStudent = [...students];
    const edit = cloneStudent[id - 1];
    setName(edit.name);
    setIsEditing(true);
    setEditingId(id);
    console.log(edit, cloneStudent, id);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff",
        borderRadius: "2%",
        // position:"fixed",
        boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
      }}
    >
      <h2
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Todo List
      </h2>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 60,
        }}
      >
        <TextField
          size="small"
          value={name}
          onChange={handleName}
          placeholder="Enter"
        />
        {isEditing ? (
          <Button
            onClick={handleUpdate}
            variant="contained"
            style={{ marginLeft: 20 }}
          >
            Update
          </Button>
        ) : (
          <Button
            onClick={handleAdd}
            variant="contained"
            style={{ marginLeft: 20 }}
          >
            Add
          </Button>
        )}
      </Box>

      <Box
        overflow={"auto"}
        style={{
          //   display: "flex",
          marginTop: 40,
          marginBottom: 40,
          borderRadius: "2%",
          width: "60%",
          height: "70%",
          boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: "pink" }}>
              <TableRow>
                <TableCell align="center">Sr.</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, i) => (
                <TableRow>
                  <TableCell align="center">{student.id}</TableCell>
                  <TableCell align="center">{student.name}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => handleDelete(student.id)}>
                      Delete
                    </Button>
                    <Button onClick={() => handleEdit(student.id)}>edit</Button>
                  </TableCell>
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
