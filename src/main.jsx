
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";

// import './09-useReducer/intro-reducer';
// import { Padre } from './05-Tarea/Padre'
// import { MemoHook } from './07-useMemo/MemoHook'
// import { Memorize } from './06-useMemo/Memorize'
// import { TodoApp } from './09-useReducer/TodoApp';
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { CallbackHook } from './08-Callback/CallbackHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

import { MainApp } from './10-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)
