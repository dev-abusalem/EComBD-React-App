import React from 'react'
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';

const EcomRouter = () => {
  return (
    <BrowserRouter>
        <App />
    </BrowserRouter>
  )
}

export default EcomRouter