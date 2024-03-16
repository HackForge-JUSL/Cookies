import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/Authcontext.jsx'
import { QuestionContextProvider } from './context/QuestionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <QuestionContextProvider>
    <App />
    </QuestionContextProvider>
    </AuthContextProvider>
  
)

