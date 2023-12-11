import { useState, useEffect } from "react";
import { fetchTodos } from "../services/api";
import axios from "axios";

export const initialDetails = {
  title: "",
  description: "",
};

export const useTodo = () => {
  const [details, setDetails] = useState(initialDetails);
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    try {
      setLoading(true);
      const res = await fetchTodos();

      if (res.statusText !== "OK") {
        throw new Error("Network response was not ok");
      }
      setTodos(res.data);
      console.log({ res });
    } catch (error) {
      setFetchError("Error fetching todos");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!details.title || !details.description) {
      // setErr("please enter your title and description ")
      alert("please enter your title and description");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/todo/createTodo", {
        title: details.title,
        description: details.description,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      if (res.status === 200) {
        const json = res.data; // Access the response data directly
        setDetails(initialDetails);
        await getTodos();
        console.log("new todo is created added", json);
      }

      // const json = await res.json();
      if (!res.status === 200) {
        setError(json.error);
      }

    } 
    
    catch (error) {
      console.log(error);
    }
  };
  const setInputValue = (e, name) => {
    setDetails((prev) => ({ ...prev, [name]: e.target.value }));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return {
    details,
    setDetails,
    error,
    setError,
    getTodos,
    loading,
    setLoading,
    todos,
    setTodos,
    fetchError,
    setFetchError,
    handleSubmit,
    setInputValue,
  };
};
