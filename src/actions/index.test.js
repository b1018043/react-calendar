import * as actions from "./index";

test("test action addTodo",()=>{
    const date = "1234";
    const text = "hoge";
    const obj={
        type:actions.ADD_TODO,
        payload:{
            date,
            text
        }
    };
    expect(actions.addTodo(date,text)).toStrictEqual(obj);
});

test("test action removeTodo", () => {
    const id=1;
    const obj = {
        type: actions.REMOVE_TODO,
        payload: {
            id
        }
    };
    expect(actions.removeTodo(id)).toStrictEqual(obj);
});