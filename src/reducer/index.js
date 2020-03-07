import * as actions from "../actions";

const initState=JSON.parse(localStorage.getItem("react-calendar-info"))||{id:0,list:[]};

const todoReducer=(state=initState,action)=>{
    let result;
    switch(action.type){
        case actions.ADD_TODO:
            const {date,text}=action.payload;
            const cmp=(a,b)=>a.date<b.date?-1:a.date>b.date?1:0;
            result = Object.assign({}, state, {
                id: state.id + 1,
                list: [...state.list, { id: state.id, date, text }].sort(cmp),
            });
            localStorage.setItem("react-calendar-info",JSON.stringify(result));
            return result;
        case actions.REMOVE_TODO:
            const {id}=action.payload;
            result = Object.assign({}, state, {
                list: state.list.filter(v => v.id !== id),
            });
            localStorage.setItem("react-calendar-info", JSON.stringify(result));
            return result;
        default:
            return state;
    }
};

export default todoReducer;