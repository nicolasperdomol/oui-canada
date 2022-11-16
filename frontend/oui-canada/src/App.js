import React, {useState, useEffect} from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import HashLoader from "react-spinners/HashLoader";
import "./styles/css/main.css";
import {Routes, Route} from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>about</h1>} />
          </Routes>
        </>
        }
    </div>
    
  );
}

export default App;
