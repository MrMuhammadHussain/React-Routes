import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./compuntes/login";
import Signup from "./compuntes/signup";
import Home from "./compuntes/home";


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route
        path="/"
        element={<Home/>}
        errorElement={<notFound/>}
        
        />

<Route
        path="/login"
        element={<Login/>}
        errorElement={<notFound/>}
        
        />


<Route
        path="/signup"
        element={<Signup/>}
        errorElement={<notFound/>}
        
        />
      </Routes>

    </div>
  );
}

export default App;
