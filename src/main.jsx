import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApp } from './08-useReducer/TodoApp'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'


// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
