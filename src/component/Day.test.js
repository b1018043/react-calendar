import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import {render} from "@testing-library/react";

import Day from "./Day";

describe("<Day> test",()=>{
    const props={
        day:3
    };
    it("render day",()=>{
        const {getByText}=render(<Day {...props}/>);
        expect(getByText("3")).toBeInTheDocument();
    })
})