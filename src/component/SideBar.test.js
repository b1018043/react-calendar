import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SideBar from "./SideBar";

describe("<SideBar> test", () => {
    it("test list", () => {
        const props={
            open:true,
            onOpen:()=>jest.fn(),
            onClose:()=>jest.fn(),
            movePage:(_)=>jest.fn(),
            listContent: Array(10).fill({
                path: "/",
                icon: <div />,
                text: "test",
            })
        };
        const {getAllByText}=render(<SideBar {...props}/>);
        const items=getAllByText("test");
        expect(items.length).toBe(props.listContent.length);
    });
    it("test click",()=>{
        const movePage =jest.fn()
        const props = {
            open: true,
            onOpen: () => jest.fn(),
            onClose: () => jest.fn(),
            movePage:()=>movePage,
            listContent: Array(10).fill({
                path: "/",
                icon: <div />,
                text: "test",
            })
        };
        const { getAllByText } = render(<SideBar {...props} />);
        const items = getAllByText("test");
        fireEvent.click(items[0]);
        expect(movePage).toBeCalled();
    });
})