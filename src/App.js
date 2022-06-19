import './App.css';
import React, { useState, useEffect} from 'react';
import Holidays from './components/Holidays'
import DayContainer from './components/DayContainer'
import HolidayContainer from './components/HolidayContainer'
import TasksForm from './components/TasksForm'
import SpecialEventsForm from './components/SpecialEventsForm'
import Reminders from './components/Reminders'
import NavBar from './components/NavBar'


export default function App() {

  const [holidays, setHolidays] = useState([])
  const [taskValue, setTaskValue] = useState("")

  useEffect(() => {
      fetch("http://localhost:3000/holidays")
          .then(response => response.json())
          .then(data => setHolidays(data))
  },[])
  
  

  return (
    
      <div>
        <NavBar taskValue={taskValue}/>
        <DayContainer />
        <HolidayContainer holidays={holidays} />
      
    </div>
  );
}



