import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById("root")).render(
  // <div>
  //   <h1>
  //     <p>Hi my name is...</p>
  //   </h1>
  // </div>
  // React.createElement(
  //   "div",
  //   null,
  //   React.createElement(
  //     "h1",
  //     { style: { color: "red" } },
  //     React.createElement("p", null, "Hi my name is Wili")
  //   )
  // )
// );
