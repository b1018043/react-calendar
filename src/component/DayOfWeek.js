import React from "react";
import PropTypes from "prop-types";
import {makeStyles,colors} from "@material-ui/core";

const useStyle=makeStyles(theme=>({
    Day:{
        display: "block",
        border: `solid 2px ${colors.grey[200]}`,
        "&:hover":{
            background:colors.grey[200],
        },
        width: "100%",
    }
}));

const DayOfWeek = ({ day})=>{
    const classes=useStyle();
    return (
        <div className={classes.Day}>{day}</div>
    );
}

DayOfWeek.propTypes={
    day: PropTypes.string.isRequired,
};

export default DayOfWeek;