import React from 'react';
// import Days from './Days'
import {Card, CardGroup } from 'react-bootstrap'


const DayContainer = () => {

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
    <CardGroup>
    <Card key={index}>
    <Card.Body>
    <Card.Title>{week.day}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{week.date}</Card.Subtitle>
    <Card.Text>
      Text
    </Card.Text>
    </Card.Body>
    </Card></CardGroup>
    </div>
    </>
)
}

return <div>
    {daysInfo.map(renderDays)}
</div>
}

export default DayContainer;