//node_modules
import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux";
import {makeStyles,Typography,IconButton,Tooltip} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//defined modules
import DayOfWeek from "../component/DayOfWeek";
import Day from "../component/Day";
import TaskCard from "../component/TaskCard";
import * as util from "../util/index";


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
    },
    List:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    }
}));

const Calendar=()=>{
    const calendarStrs = ["日", "月", "火", "水", "木", "金", "土"];
    const lastDay = [[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]];
    const classes= useStyle();
    const [day,setDay]=useState([]);
    const list = useSelector(store => store.list)
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
        const d = lastDay[util.isLeapYear(tmp_y) ? 1 : 0][tmp_m - 1] < day[2] ? lastDay[util.isLeapYear(tmp_y) ? 1 : 0][tmp_m - 1] : day[2];
        setDay([tmp_y,tmp_m,d])
    };
    const handleDay=(y,m,d)=>()=>{
        d = lastDay[util.isLeapYear(y) ? 1 : 0][m-1] < d ? lastDay[util.isLeapYear(y) ? 1 : 0][m-1]:d;
        setDay([y,m,d]);
    }
    const makeCalendarArray=(y=2000,m=1,d=1)=>{
        //カレンダーで表示する月とその前の月の日付を表す配列を作成
        let tmp_array=Array.from({ length: (util.getDayOfWeek(y, m, 1) + 6) % 7 }, ((_, i) => {
            return {
                year:(m<=1)?y-1:y,
                month:(m<=1)?12:m-1,
                day: (m - 2 < 0 ? 31 : lastDay[util.isLeapYear(y) ? 1 : 0][m - 2]) - i,
            };
        })).reverse()
        .concat(Array.from({ length: lastDay[util.isLeapYear(y) ? 1 : 0][m - 1] },((_, i) => {
            return {
                year:y,
                month:m,
                day: i + 1,
            };
        })));

        const array_len=tmp_array.length;
        //配列の長さによって何日分次の月の日付で埋めるかを決める
        if(array_len<=35) return tmp_array.concat(Array.from({length: (35-array_len)},(_,i)=>{
            return {
                year:(m>=12)?y+1:y,
                month:(m>=12)?1:m+1,
                day: i + 1,
            };
        }));
        else if (array_len > 35 && array_len <= 42) return tmp_array.concat(Array.from({ length: (42 - array_len) }, (_, i) => {
            return {
                year: (m >= 12) ? y + 1 : y,
                month: (m >= 12) ? 1 : m + 1,
                day: i + 1,
            };
        }));
        return tmp_array;
    };

    const fillZero=(n)=>(n>=10)?String(n):`0${n}`;

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
                    const y=fillZero(v.year);const m=fillZero(v.month);const d=fillZero(v.day);
                    const events=list.filter((w)=>w.date===`${y}/${m}/${d}`);
                    return (
                        <Day day={v.day} key={i} events={events} onClick={handleDay(v.year,v.month,v.day)}/>
                    );
                })}
            </div>
            <div className={classes.List}>
                {list.filter(w=>{
                    const y = fillZero(day[0]); const m = fillZero(day[1]); const d = fillZero(day[2]);
                    return w.date === `${y}/${m}/${d}`;
                }).map(v=><TaskCard key={v.id} task={v.text} id={v.id}/>)}
            </div>
        </div>
    );
}

export default Calendar;