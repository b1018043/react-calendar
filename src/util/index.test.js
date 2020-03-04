import {getDayOfWeek,isLeapYear} from "./index";

const dayofweek=["土","日","月","火","水","木","金"];

test("test getDayOfWeek",()=>{
    expect(dayofweek[getDayOfWeek(1994, 11, 5)]).toBe("土");
    expect(dayofweek[getDayOfWeek(2011, 1, 2)]).toBe("日");
    expect(dayofweek[getDayOfWeek(2020, 3, 2)]).toBe("月");
    expect(dayofweek[getDayOfWeek(2033, 3, 8)]).toBe("火");
    expect(dayofweek[getDayOfWeek(2009, 2, 25)]).toBe("水");
    expect(dayofweek[getDayOfWeek(2009, 2, 26)]).toBe("木");
    expect(dayofweek[getDayOfWeek(2009, 2, 27)]).toBe("金");
});

test("test isLeadYear",()=>{
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2004)).toBe(true);
    expect(isLeapYear(2016)).toBe(true);
    expect(isLeapYear(2100)).toBe(false);
    expect(isLeapYear(2200)).toBe(false);
});