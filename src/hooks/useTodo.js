import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    //grabar el el localstorage los todos
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
    // console.log(todo)
  };

  // dandleDeleteTodo
  const handleDeleteTodo = (id) => {
    // console.log(id);
    dispatch({
      type: "[TODO] Delete Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    // console.log(id);
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  //agregar el todosCount
  const todosCount = todos.length;

  // agregar el pendingTodosCount
  const pendingTodosCount = todos.filter(todo=> !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};

