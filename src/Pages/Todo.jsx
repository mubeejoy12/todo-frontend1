import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { Alert, Grid, TextField, Typography, styled } from "@mui/material";
import TodoDetails from "./TodoDetails";
import { initialDetails, useTodo } from "../hooks/useTodo";

const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 10,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
});

const Todo = () => {
  const { details, setDetails, error, setError, getTodos, todos, loading, setInputValue, handleSubmit } =
    useTodo();

  // create new todo list
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (details.title < 0 && details.description < 0) {
  //     // setErr("please enter your title and description ")
  //     Alert("please enter your title and description");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("http://localhost:5000/todo/createTodo", {
  //       method: "POST",
  //       body: JSON.stringify(details),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(res);

  //     const json = await res.json();
  //     if (!res.okay) {
  //       setError(json.error);
  //     }

  //     if (res) {
  //       setDetails(initialDetails);
  //       await getTodos();
  //       console.log("new todo is created added", json);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const setInputValue = (e, name) => {
  //   setDetails((prev) => ({ ...prev, [name]: e.target.value }));
  // };



  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Card sx={{ width: 414, height: 700, backgroundColor: "#a357" }}>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              height: "100px",
              display: "flex",
            }}
          >
            <Grid container spacing={1} sx={{ marginTop: "10px" }}>
              <Grid xs={9}>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
                >
                  {/* {err && <Typography sx={{ color: "red" }}>{err}</Typography>} */}
                  <TextField
                    label={"Title"}
                    size="small"
                    sx={{ width: "250px", marginLeft: "20px" }}
                    value={details.title}
                    type="text"
                    onChange={(e) => setInputValue(e, "title")}
                  ></TextField>
                  <TextField
                    label={"Description"}
                    size="small"
                    sx={{ width: "250px", marginLeft: "20px" }}
                    value={details.description}
                    type="text"
                    onChange={(e) => setInputValue(e, "description")}
                  ></TextField>
                </Box>
              </Grid>

              <Grid xs={3}>
                <Button
                  sx={{
                    width: "70px",
                    border: "2px solid blue",
                    height: "87px",
                  }}
                  onClick={handleSubmit}
                >
                  <AddIcon fontSize="large"></AddIcon>
                </Button>
              </Grid>
            </Grid>
          </Box>

          <TodoDetails loading={loading} todos={todos} />
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};

export default Todo;
