import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FormDialog from "./FormDialog";

const mockDispatch=jest.fn();

jest.mock("react-redux",()=>({
    useDispatch:()=>mockDispatch
}));

describe("<FormDialog> test",()=>{
    afterEach(()=>{
        jest.restoreAllMocks()
    })
    it("test input",()=>{
        const props={
            open: true,
            onClose: ()=>null,
        };
        const {getByTestId}=render(<FormDialog {...props}/>);
        const TaskInput = getByTestId("task");
        const DateInput = getByTestId("testDate");
        fireEvent.change(TaskInput,{target:{value:"test"}});
        fireEvent.change(DateInput,{target:{value:"2020-1-2"}});
        expect(TaskInput["value"]).toBe("test");
        expect(DateInput["value"]).toBe("2020-1-2");
    });
    it("test submit",()=>{
        const props = {
            open: true,
            onClose: () => null,
            _task: "test",
            _date:"2020-01-02",
        };
        const { getByText } = render(<FormDialog {...props} />);
        const submit = getByText("Submit");
        fireEvent.click(submit);
        expect(mockDispatch).toBeCalled();
    });
})