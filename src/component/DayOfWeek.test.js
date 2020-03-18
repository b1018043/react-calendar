import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import DayOfWeek from "./DayOfWeek";

describe("<DayOfWeek> test", () => {
    const props = {
        day: "日"
    };
    it("render day of week", () => {
        const { getByText } = render(<DayOfWeek {...props} />);
        expect(getByText("日")).toBeInTheDocument();
    })
})