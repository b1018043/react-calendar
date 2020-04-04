import React from "react";
import PropTypes from "prop-types";
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import { makeStyles, colors,Typography } from "@material-ui/core";

const useStyle=makeStyles(theme=>({
    Day:{
        display: "block",
        border: `solid 2px ${colors.grey[200]}`,
        "&:hover": {
            background: colors.grey[200],
        },
        width:"100%",
    },
    DayNotMonth: {
        display: "block",
        border: `solid 2px ${colors.grey[100]}`,
        color: colors.grey[100],
        "&:hover": {
            background: colors.grey[100],
        },
        width: "100%",
    },
    TaskParent:{
        width:"100%",
        position:"relative",
        margin:0,
        paddingLeft:0,
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    TaskItem:{
        listStyleType: "none",
        backgroundColor: colors.green[100],
        overflow: "hidden",
        marginLeft: "3%",
        marginRight: "3%",
        borderRadius: "5px"
    },
    TaskIcon:{
        display:"inline",
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    }
}));

const Day=({day,events,active,onClick})=>{
    const classes=useStyle()
    return (
        <div className={active?classes.Day:classes.DayNotMonth} onClick={onClick}>
            <Typography>{day}</Typography>
            <ul className={classes.TaskParent}>
                {events.map((v, i) => {
                    if(i>1) return null;
                    return (
                        <li key={i} className={classes.TaskItem}>{v.text}</li>
                    )
                })}
                {events.length > 2 && <li className={classes.TaskItem}>other</li>}
            </ul>
            {events.length>0&&(
                <div className={classes.TaskIcon}>
                    <AssignmentLateIcon />
                </div>
            )}
        </div>
    );
};

Day.propTypes={
    day: PropTypes.number.isRequired,
    events: PropTypes.array.isRequired,
    active: PropTypes.bool.isRequired,
};

Day.defaultProps={
    events:[],
    active: true,
}

export default Day;