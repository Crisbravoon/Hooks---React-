
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

// import './09-useReducer/intro-reducer';
// import { Padre } from './05-Tarea/Padre'
// import { MemoHook } from './07-useMemo/MemoHook'
// import { Memorize } from './06-useMemo/Memorize'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { CallbackHook } from './08-Callback/CallbackHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

import { TodoApp } from './09-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
)
