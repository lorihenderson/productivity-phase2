import React from 'react';
import TasksForm from './TasksForm'
import SpecialEventsForm from './SpecialEventsForm'
import Reminders from './Reminders'
import Holidays from './Holidays'

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavBar( ) {





return (
        <>
        <div>
        <nav>
              <Link className="button" to='/TasksForm'>TasksForm</Link>
              <Link className="button" to='/SpecialEventsForm'>SpecialEventsForm</Link>
              <Link className="button" to='/Reminders'>Reminders</Link>
              <Link className="button" to='/Holidays'>Holidays</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
        </Switch>
            
        </div>
        </>
)
}

export default NavBar;


