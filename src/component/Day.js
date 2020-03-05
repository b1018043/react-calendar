import React from "react";
import PropTypes from "prop-types";
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
    }
}));

const Day=({day,events,active})=>{
    const classes=useStyle()
    return (
        <div className={active?classes.Day:classes.DayNotMonth}>
            <Typography>{day}</Typography>
            {events.length}
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