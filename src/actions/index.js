export const ADD_TODO=Symbol();
export const REMOVE_TODO=Symbol();

export const addTodo=(date,text)=>({
    type: ADD_TODO,
    payload:{
        date,text,
    },
});

export const removeTodo=(id)=>({
    type: REMOVE_TODO,
    payload:{
        id,
    },
});