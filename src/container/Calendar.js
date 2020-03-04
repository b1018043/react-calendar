import React from "react";
import DayOfWeek from "../component/DayOfWeek";
import {makeStyles} from "@material-ui/core";

const useStyle=makeStyles(theme=>({
    Header:{
        display:"flex",
    }
}));

const Calendar=()=>{
    const calendarStrs = ["日", "月", "火", "水", "木", "金", "土"];
    const classes= useStyle();
    return (
        <div>
            <div className={classes.Header}>
                {calendarStrs.map((str, i) => {
                    return <DayOfWeek key={i} day={str} />
                })}
            </div>
        </div>
    );
}

export default Calendar;