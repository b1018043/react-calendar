import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TaskCard from "./TaskCard"

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch
}));

describe("<TaskCard> test", () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })
    it("test render strings from props", () => {
        const props = {
            task:"test",
            date:"2000-01-01",
            id: 1,
        };
        const { getByText } = render(<TaskCard {...props} />);
        const taskElement=getByText(/test/g);
        const dateElement=getByText(/2000-01-01/g);
        expect(taskElement).toBeInTheDocument();
        expect(dateElement).toBeInTheDocument();
    });
    it("test submit", () => {
        const props = {
            task: "test",
            date: "2000-01-01",
            id: 1,
        };
        const { getByTestId } = render(<TaskCard {...props} />);
        const deleteButton=getByTestId("delete");
        fireEvent.click(deleteButton);
        expect(mockDispatch).toBeCalled();
    });
})