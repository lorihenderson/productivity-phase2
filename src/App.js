import './App.css';
import React, { useState, useEffect} from 'react';
import DayContainer from './components/DayContainer'
import HolidayContainer from './components/HolidayContainer'
import NavBar from './components/NavBar'
import Tasks from './components/Tasks.json'
// import Holidays from './components/Holidays'
// import TasksForm from './components/TasksForm'
// import SpecialEventsForm from './components/SpecialEventsForm'
// import Reminders from './components/Reminders'


export default function App() {

  const [holidays, setHolidays] = useState([])



  const [taskValue, setTaskValue] = useState(Tasks)


  useEffect(() => {
      fetch("http://localhost:3000/holidays")
          .then(response => response.json())
          .then(data => setHolidays(data))
  },[])
  
  
  const onAddTask = (newTaskValue) => {
    
    setTaskValue([...taskValue, newTaskValue])
    
  }
  
  console.log("tasks", taskValue)


  return (
    
      <div>
        <NavBar taskValue={taskValue} onAddTask={onAddTask}/>
        <DayContainer />
        <HolidayContainer holidays={holidays} />
      
    </div>
  );
}



