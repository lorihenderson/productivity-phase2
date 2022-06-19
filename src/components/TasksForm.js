import React from 'react';


function TasksForm() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted your task!!')
    }




return (
        <>
        <div className="add-task">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Add A Task</p>
                        <input text="text" />
                    </label>
                </fieldset>
                <button type="submit">Add</button>
            </form>
        </div>
        </>
)
}


export default TasksForm;