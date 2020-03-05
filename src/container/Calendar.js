import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import DayOfWeek from "../component/DayOfWeek";
import Day from "../component/Day";
import * as util from "../util/index";
import {makeStyles,Typography,IconButton,Tooltip} from "@material-ui/core";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyle=makeStyles(theme=>({
    Container:{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"10px",
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
    title:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom: "10px",
    },
    Header:{
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    },
    Body:{
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        [theme.breakpoints.down("sm")]:{
            gridAutoRows: "50px",
        },
        [theme.breakpoints.between("sm","md")]: {
            gridAutoRows: "90px",
        },
        [theme.breakpoints.up("md")]:{
            gridAutoRows: "100px",
        },
    }
}));

const Calendar=()=>{
    const calendarStrs = ["日", "月", "火", "水", "木", "金", "土"];
    const lastDay = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    const classes= useStyle();
    const [day,setDay]=useState([]);
    useEffect(()=>{
        const tmp_date=new Date();
        const tmp_str = tmp_date.toLocaleDateString();
        setDay(tmp_str.split('/').map(Number));
    },[]);
    const moveMonth=(n)=>{
        if(day.length>3) return;
        let tmp_m=day[1];
        let tmp_y=day[0];
        tmp_m+=n;
        if(tmp_m>12){
            tmp_m%=12;
            tmp_y++;
        }
        if(tmp_m<1){
            tmp_m=12;
            tmp_y--;
        }
        setDay([tmp_y,tmp_m,day[2]])
    };
    const makeCalendarArray=(y=2000,m=1,d=1)=>{
        let tmp_array=Array.from({ length: (util.getDayOfWeek(y, m, 1) + 6) % 7 }, ((_, i) => {
            return (m - 2 < 0 ? 31 : lastDay[util.isLeapYear(y) ? 1 : 0][m - 2]) - i
        })).reverse()
        .concat(Array.from({ length: lastDay[util.isLeapYear(y) ? 1 : 0][m - 1] },((_, i) => i + 1)));
        const array_len=tmp_array.length;
        if(array_len<=35) return tmp_array.concat(Array.from({length: (35-array_len)},(_,i)=>i+1));
        else if (array_len > 35 && array_len <= 42) return tmp_array.concat(Array.from({ length: (42 - array_len) }, (_, i) => i + 1));
        return tmp_array;
    };
    return (
        <div className={classes.Container}>
            <div className={classes.title}>
                <Tooltip title="先月">
                    <IconButton component="span" onClick={() => moveMonth(-1)}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                </Tooltip>
                {day.length >= 3 && <Typography variant="h4">{day[0]}年{day[1]}月{day[2]}日</Typography>}
                <Tooltip title="翌月">
                    <IconButton component="span" onClick={() => moveMonth(1)}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </Tooltip>
            </div>
            <div className={classes.Header}>
                {calendarStrs.map((str, i) => {
                    return <DayOfWeek key={i} day={str} />
                })}
            </div>
            <div className={classes.Body}>
                {day.length >= 3 && makeCalendarArray(day[0],day[1],day[2]).map((v,i)=>{
                    return (
                        <Day day={v} key={i}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Calendar;