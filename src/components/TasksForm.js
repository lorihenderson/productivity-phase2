import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap'

function TasksForm ( {taskValue} ) {
const [task, setTask] = useState("")

function handleTask(event){
    setTask(taskValue)
}
console.log(handleTask)
return (
        <>
        <div class="dropdown-content">ADD A TASK 
        <form>       
        <input type="text" onChange={handleTask} value={task}></input>
        </form><button type="submit"> Add</button>
        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/Monday-1">Monday</Dropdown.Item>
        <Dropdown.Item href="#/Tuesday-2">Tuesday</Dropdown.Item>
        <Dropdown.Item href="#/Wednesday-3">Wednesday</Dropdown.Item>
        </DropdownButton> */}
        </div>
        </>
)

}

export default TasksForm;