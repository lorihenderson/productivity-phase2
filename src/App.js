import './App.css';
import React, { useEffect } from 'react';

function App() {


  useEffect(() => {
    fetch("http://localhost:8000/title")
      .then(response => response.json())
      .then(data => console.log("this is my", (data)))
  },[])
  
  return (
    

    
    <div className="App">
    </div>
  );
}

export default App;
