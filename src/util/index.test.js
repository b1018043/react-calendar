import {calcDayOfWeek} from "./index";

const dayofweek=["土","日","月","火","水","木","金"];

test("test calcDayOfWeek",()=>{
    expect(dayofweek[calcDayOfWeek(1994, 11, 5)]).toBe("土");
    expect(dayofweek[calcDayOfWeek(2011, 1, 2)]).toBe("日");
    expect(dayofweek[calcDayOfWeek(2020, 3, 2)]).toBe("月");
    expect(dayofweek[calcDayOfWeek(2033, 3, 8)]).toBe("火");
    expect(dayofweek[calcDayOfWeek(2009, 2, 25)]).toBe("水");
    expect(dayofweek[calcDayOfWeek(2009, 2, 26)]).toBe("木");
    expect(dayofweek[calcDayOfWeek(2009, 2, 27)]).toBe("金");
});