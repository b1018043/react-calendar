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
        [theme.breakpoints.down("sm")]:{
            width: "40px",
        },
        [theme.breakpoints.between("sm","md")]:{
            width: "100px",
        },
        [theme.breakpoints.up('md')]:{
            width: "150px",
        }
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