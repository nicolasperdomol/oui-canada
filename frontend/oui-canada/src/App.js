import React, {useState, useEffect} from "react";
import Home from "./components/Home";
import HashLoader from "react-spinners/HashLoader";
import {Routes, Route} from "react-router-dom";
import "./styles/css/main.css";
import "./components/Navbar"
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  const themes = ["blue", "grey", "red", "yellow"];
  const randIndex = Math.floor(Math.random() * 4);
  const mainTheme = themes[randIndex];
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 100)
  });

  return (
    <div className="App">
      {loading ?
        <div className="loadingPanel">
          <HashLoader
            color={"#ab3743"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        :
        <>
          <Navbar mainTheme={mainTheme}/>
          <Routes>
            <Route path="/" element={<Home themes = {themes} mainTheme = {mainTheme}/>} />
            <Route path="/about" element={<h1>about</h1>} />
          </Routes>
        </>
        }
    </div>
    
  );
}

export default App;
