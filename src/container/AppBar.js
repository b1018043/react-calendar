import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import { AppBar,Toolbar,IconButton,Typography,makeStyles} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SideBar from "../component/SideBar";
import FormDialog from "../component/FormDialog";

const useStyle=makeStyles(theme=>({
    menuButton:{
        marginRight:"20px",
    },
    list:{
        width:"250px",
    },
    grow: {
        flexGrow: 1,
    },
    addTodoButton:{
        marginRight:0
    }
}));

const Bar=()=>{
    const classes=useStyle()
    const [open,setOpen]=useState(false);
    const [show,setShow]=useState(false);
    const toggleDrawer=(bool)=>()=>{
        setOpen(bool);
    };
    const toggleDialog=(bool)=>()=>{
        setShow(bool);
    }
    const history=useHistory();
    const listContent=[
        {
            text:"Calendar",
            path:"/",
            icon: <CalendarTodayIcon />,
        },
        {
            text:"Task",
            path:"/task",
            icon: <CheckBoxIcon />
        }
    ];
    const movePage=(path)=>()=>{
        history.push(path);
    };
    return (
        <>
            <AppBar position="static" className={classes.grow}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Calendar
                    </Typography>
                    <div className={classes.grow}/>
                    <IconButton color="inherit" className={classes.addTodoButton} onClick={toggleDialog(true)}>
                        <NoteAddIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SideBar
                open={open}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                listContent={listContent}
                movePage={movePage}
            />
            <FormDialog
                open={show}
                onClose={toggleDialog(false)}
            />
        </>
    );
};

export default Bar;