import React from 'react';
import { render } from '@testing-library/react';
import Calendar from './Calendar';
import Day from "../component/Day";

test('曜日が表示されているかを確認', () => {
    const calendarStrs = ["日", "月", "火", "水", "木", "金", "土"];
    const { getByText } = render(<Calendar />);
    calendarStrs.forEach(v=>{
        const linkElement = getByText(v);
        expect(linkElement).toBeInTheDocument();
    })
});

test('日付が表示されているのかを確認', () => {
    const { getByText } = render(<Day day={1}/>);
    const DayElment = getByText("1");
    expect(DayElment).toBeInTheDocument();
});