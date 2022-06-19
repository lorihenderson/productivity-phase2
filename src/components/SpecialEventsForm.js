import React from 'react';
import Events from './Events.json';

function SpecialEventsForm() {

return (
    <>
    <div>
            <h1>Special Events  List</h1>
            {Events.map(event => (
                <li key={event.id}>{event.name}</li>
            ))}
        </div>
    <form >
                <fieldset>
                    <label>
                        <p>Add A Special Event</p>
                        <input text="text"/>
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
    </>
)

}


export default SpecialEventsForm;