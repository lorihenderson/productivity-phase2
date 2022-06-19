import React from 'react';



function Holidays( { holiday } ) {


return(
    <div className="holidaycolumn" align="center">
    <div
      className="holidayscard"
      key={holiday.id}
      onClick={() => console.log("HELLO")}
    > <button className="holidaybutton">
      <div className="content">
        <div className="header">
          {holiday.name}
        </div>
      </div>
        <span>
          {holiday.date}
        </span></button>
      </div>
    </div>

)



}

export default Holidays;

