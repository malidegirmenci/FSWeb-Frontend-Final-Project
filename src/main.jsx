import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { myStore } from './store/store.jsx'
import DarkModeProvider from './context/darkModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <Provider store={myStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Provider>
  </DarkModeProvider>
)
