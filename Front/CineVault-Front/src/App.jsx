import React, { useEffect, useState } from "react";
import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <h1>CineVault</h1>
      <nav>
        <Link to="/">Home</Link> 
        <span> - </span>
        <Link to="/movies">Movies</Link>
        <span> - </span>
        <Link to="/create">Create</Link>
        <span> - </span>
        <Link to="/update">Update</Link>
        <span> - </span>
        <Link to="/delete">Delete</Link>

      </nav>
      
      <br />
      <Outlet/>
    </>
  );
}

export default App;
