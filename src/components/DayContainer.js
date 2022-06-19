import React from 'react';
import Days from './Days'
import {Card} from 'react-bootstrap'


function DayContainer() {

const daysInfo = [
    { day: "Sunday", date:"1"},
    { day: "Monday", date:"2"},
    { day: "Tuesday", date:"3"},
    { day: "Wedneday", date:"4"},
    { day: "Thursday", date:"5"},
    { day: "Friday", date:"6"},
    { day: "Saturday", date:"7"}
]
const renderDays = (week, index) => {
return (

    <>
    <div> DAY CONTAINER
    <Card style={{ width: '18rem' }} key={index}>
    <Card.Body>
    <Card.Title>{week.day}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{week.date}</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
    </>


)
}
}

export default DayContainer;