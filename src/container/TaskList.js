import React from "react";
import {useSelector} from "react-redux";
import TaskCard from "../component/TaskCard";

const TaskList=()=>{
    const taskList=useSelector(store=>store.list)
    return (
    <div>
        {taskList.map((v)=>{
            const {id,text,date}=v;
            return (
                <TaskCard key={id} id={id} task={text} date={date}/>
            );
        })}
    </div>
    );
};

export default TaskList;