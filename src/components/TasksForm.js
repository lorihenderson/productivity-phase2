import React, { useState } from 'react';
import Tasks from './Tasks.json'

function TasksForm( {onAddTask, taskValue }) {
    
    const initialState = { name: ""}
    const [formData, setFormData] = useState(initialState)
    
    
    const handleSubmit = event => {
        event.preventDefault();
        onAddTask(formData)
        setFormData(initialState)

        // fetch(taskValue, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accepts": "application/json"
        //     }
        // })
    }

    const handleTask = (e) => {
        console.log(e.target.value)

        const { name, value } = e.target


        setFormData((previousFormData) => ({...previousFormData, [name]:value}))
    }
return (
        <>
        <div>
            <h1>Task List</h1>
            {Tasks.map(task => (
                <li key={task.id}>{task.name}</li>
            ))}
        </div>
        <div className="add-task">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Add A Task</p>
                        <input text="text" id="name" name="name" onChange={handleTask} value={formData.name}/>
                    </label>
                </fieldset>
                <button type="submit">Add</button>
            </form>
            <select>
                <option value="Sunday" selected>Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
            </select>
        </div>
        </>
)
}


export default TasksForm;