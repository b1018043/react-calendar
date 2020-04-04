import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../actions"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";


const FormDialog = ({ open, onClose,_date="",_task=""})=>{
    const dispatch=useDispatch();
    const [task,setTask]=useState(_task);
    const [date,setDate]=useState(_date);
    const handleTask=(e)=>{
        setTask(e.target.value);
    };
    const handleDate=(e)=>{
        const raw_str =e.target.value;
        setDate(raw_str.replace(/-/g,"/"));
    };
    const submitTask=()=>{
        if (!(task.trim()&&date.trim())) return;
        dispatch(addTodo(date,task));
        setTask("");
        setDate("");
        onClose();
    };
    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>予定</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        予定の日付と内容を入力してください
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="task"
                        inputProps={{ "data-testid": "task" }}
                        label="予定"
                        type="text"
                        value={task}
                        onChange={handleTask}
                    />
                    <br/>
                    <TextField
                        id="date"
                        inputProps={{ "data-testid": "date" }}
                        type="date"                        
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={date.split("/").join("-")}
                        onChange={handleDate}
                    />
                    <TextField
                        inputProps={{ "data-testid": "testDate" }}
                        type="hidden"
                        onChange={handleDate}
                        value={date.split("/").join("-")}
                    />
                    <DialogActions>
                        <Button color="primary" onClick={onClose}>Cancel</Button>
                        <Button color="primary" onClick={submitTask}>Submit</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
};

FormDialog.propTypes={
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default FormDialog;