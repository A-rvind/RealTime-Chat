import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from "./Context/AuthContext";
import { ChatContextProvider } from './Context/ChatContext.jsx';

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <AuthContextProvider>
      <ChatContextProvider>
      <React.StrictMode>
      <App />
      </React.StrictMode>
      </ChatContextProvider>
    </AuthContextProvider>
    
  
 
);
