import React from "react";
import DayOfWeek from "../component/DayOfWeek";
import Day from "../component/Day";
import {makeStyles} from "@material-ui/core";

const useStyle=makeStyles(theme=>({
    Container:{
        [theme.breakpoints.down("sm")]:{
            width:"80vw",
        },
        [theme.breakpoints.down("md")]: {
            width: "90vw",
        },
        [theme.breakpoints.up("md")]: {
            width: "95vw",
        }
    },
    Header:{
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    },
    Body:{
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        [theme.breakpoints.down("sm")]:{
            gridAutoRows: "55px",
        },
        [theme.breakpoints.between("sm","md")]: {
            gridAutoRows: "100px",
        },
        [theme.breakpoints.up("md")]:{
            gridAutoRows: "110px",
        },
    }
}));

const Calendar=()=>{
    const calendarStrs = ["日", "月", "火", "水", "木", "金", "土"];
    const lastDay = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    const classes= useStyle();
    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
                {calendarStrs.map((str, i) => {
                    return <DayOfWeek key={i} day={str} />
                })}
            </div>
            <div className={classes.Body}>
                {Array.from({ length: lastDay[0][0] }, ((v, i)=>i+1)).map((v,i)=>{
                    return (
                        <Day day={v} key={i}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Calendar;