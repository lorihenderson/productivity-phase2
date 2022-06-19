import React from 'react';
import Holidays from './Holidays'

function HolidayContainer( { holidays}) {




return (
    <>HOLIDAY CONTAINER
    <div > 
    {holidays.map((holiday) => 
          <Holidays key={holiday.id} 
                    holiday={holiday} 
                    
          />
          )}
    </div>
    </>
    
    
    
    
)
}
    
export default HolidayContainer;