import './App.css';
import React, { useEffect } from 'react';

function App() {


  useEffect(() => {
    fetch("http://localhost:8000/posts/")
      .then(response => response.json())
      .then(data => console.log(data))
  },[])
  
  return (
    

    
    <div className="App">
    </div>
  );
}

export default App;
