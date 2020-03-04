import React from 'react';
import { render } from '@testing-library/react';
import Calendar from './Calendar';

test('曜日が表示されているかを確認', () => {
    const calendarStrs = ["日", "月", "火", "水", "木", "金", "土"];
    const { getByText } = render(<Calendar />);
    const linkElement = getByText(calendarStrs[0]);
    expect(linkElement).toBeInTheDocument();
    calendarStrs.forEach(v=>{
        const linkElement = getByText(v);
        expect(linkElement).toBeInTheDocument();
    })
});
