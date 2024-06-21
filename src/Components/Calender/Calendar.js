import React, { useState } from "react";
import {Calendar as Calender} from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar() {
   const [date, changeDate] = useState(new Date());

   function changeValue(val) {
      changeDate(val);
   }

   return (
      <div>
         <Calender className="border-0" onChange = {changeValue} value = {date} />
      </div>
   );
}
export default Calendar;
