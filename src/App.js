import './App.css';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import Header from './components/Header'

function App() {

  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  
  useEffect(() => {
    fetch("http://localhost:8000/holidays")
    .then(response => response.json())
    .then(data => console.log("this is my", (data)))
  },[])
  
  return (
    <>
      <Header />
      <Calendar 
      value={dateState}
      onChange={changeDate}
      />
    <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </>
  );
}

export default App;
