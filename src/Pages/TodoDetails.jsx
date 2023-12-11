import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { useTodo } from "../hooks/useTodo";

const TodoDetails = ({ loading, todos }) => {
  const { getTodos, setTodos } = useTodo();

  const handleDelete = async (id) => {
    // console.log(id);
    try {
      const res = await axios.delete(
        `http://localhost:5000/todo/deleteTodo/${id}`
      );
      console.log(res);
      if (res.status === 200) {
        console.log("Todo deleted successfully");
        await getTodos();
        // Update state or re-fetch todos from the server
        // const updatedTodos = todos.filter((todo) => todo._id !== id);
        // setTodos(updatedTodos);
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box>
        {loading && <span>Loading...</span>}
        {todos &&
          todos.map((todo) => (
            <Box
              key={todo._id}
              sx={{
                border: "2px solid green",
                height: "60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
                height: "30%",
              }}
            >
              <Stack
                sx={{
                  border: "2px solid yellow",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" color="initial">
                  {todo.title}
                </Typography>
                <Typography variant="h8" color="initial">
                  {todo.description}
                </Typography>
              </Stack>

              <Button
                sx={{
                  border: "1px solid  brown",
                  height: "32px",
                  width: "32px",
                }}
              >
                <DeleteForeverIcon
                  onClick={() => handleDelete(todo._id)}
                ></DeleteForeverIcon>
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default TodoDetails;
