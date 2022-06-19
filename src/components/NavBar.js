import React from 'react';
import TasksForm from './TasksForm'
import SpecialEventsForm from './SpecialEventsForm'
// import Reminders from './Reminders'
// import Holidays from './Holidays'

// import {
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// import {Button} from 'react-bootstrap'

function NavBar( {taskValue, onAddTask} ) {





return (
        <>
        <div>
        <TasksForm onAddTask={onAddTask} taskValue={taskValue} />
        <SpecialEventsForm/>
        {/* <Button variant="info"size="lg" className="colormebutton">TASKS</Button>
        <Button variant="info"size="lg" className="colormebutton">SPECIAL EVENTS</Button>
        <Button variant="info"size="lg" className="colormebutton">REMINDERS</Button>
         */}
        {/* <nav>
              <Button variant="info"size="lg" className="colormebutton"><Link to='/TasksForm'> TasksForm</Link></Button>
              <Button variant="info" size="lg"><Link className="buttons" to='/SpecialEventsForm'>SpecialEventsForm</Link></Button>
              <Button variant="info" size="lg"><Link className="buttons" to='/Reminders'>Reminders</Link></Button>
              <Button variant="info" size="lg"><Link className="buttons" to='/Holidays'>Holidays</Link></Button>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/TasksForm">
            <TasksForm />
          </Route>
          <Route path='/SpecialEventsForm'>
            <SpecialEventsForm />
          </Route>
          <Route path='/Reminders'>
            <Reminders />
          </Route>
          <Route path="/Holidays">
            <Holidays />
          </Route>
        </Switch> */}
             
        </div>
        </>
)
}

export default NavBar;


