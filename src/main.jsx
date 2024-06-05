import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { TodoApp } from './08-useReducer/TodoApp'
// import './08-useReducer/intro-reducer'
import { MainApp } from "./09-useContext/MainApp";

const router = createBrowserRouter([
  {
    path: "*",
    element: <MainApp />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
