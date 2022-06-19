import React from 'react';
import { Button } from 'react-bootstrap'


function Holidays( { holiday } ) {


return(
    <div className="holidaycolumn" align="center">
    <div
      className="holidayscard"
      key={holiday.id}
      onClick={() => console.log("HELLO")}>
     <Button variant="primary" size="lg">
      <div className="content">
        <div className="header">
          {holiday.name}
        </div>
      </div>
        <span>
          {holiday.date}
        </span></Button>
      </div>
    </div>

)



}

export default Holidays;

