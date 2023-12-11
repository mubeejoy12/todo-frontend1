import axios from "axios";

export async function fetchTodos(params) {
  return await axios.get("http://localhost:5000/todo/getAllTodo");
}
