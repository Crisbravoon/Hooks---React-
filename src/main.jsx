
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallbackHook } from './08-Callback/CallbackHook'
// import { MemoHook } from './07-useMemo/MemoHook'
// import { Memorize } from './06-useMemo/Memorize'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallbackHook/>
  </React.StrictMode>,
)
