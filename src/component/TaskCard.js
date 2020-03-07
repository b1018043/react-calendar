import React from "react";
import {removeTodo} from "../actions";
import {useDispatch} from "react-redux";
import {Card,CardContent,IconButton,Typography,
    CardActions,makeStyles,colors,createMuiTheme,
    ThemeProvider
} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DetailsIcon from '@material-ui/icons/Details';

const StyledTypography=(props)=>{
    const theme=createMuiTheme();
    theme.typography.h3={
        fontSize: "1.2rem",
        [theme.breakpoints.down("sm")]:{
            fontSize: '0.9rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    }
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3">{props.children}</Typography>
        </ThemeProvider>
    );
};

const useStyle=makeStyles(theme=>({
    root:{
        margin: theme.spacing(2),
        background: colors.grey[50],
        display:"flex",
        "&:hover":{
            background: colors.grey[200],
        },
    },
    content:{
        display:"flex",
        textAlign:"left",
        lineClamp: 1,
        WebkitLineClamp:1,
        width: "50vw",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            marginLeft: 0
        },
        [theme.breakpoints.up("md")]:{
            flexDirection: "row",
            marginLeft: "10px",
        },
        '& h3':{
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
        },
    },
    grow: {
        flexGrow: 1,
    },
}));

const TaskCard=({task,date,id})=>{
    const dispatch=useDispatch();
    const classes=useStyle();
    const dispatchRemoveTask=(id)=>()=>{
        dispatch(removeTodo(id));
    };
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <StyledTypography>予定:{task}</StyledTypography>
                <StyledTypography>日程:{date}</StyledTypography>
            </CardContent>
                <div className={classes.grow}/>
            <CardActions>
                <IconButton>
                    <DetailsIcon />
                </IconButton>
                <IconButton onClick={dispatchRemoveTask(id)}>
                    <DeleteForeverIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default TaskCard;