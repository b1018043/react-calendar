
// 月 2 火 3 水 4 木 5 金 6 土 0 日 1 
export const getDayOfWeek=(raw_y,raw_m,d)=>{
    const { floor }= Math;
    const m=(raw_m<=2)?raw_m+12:raw_m;
    const y = (raw_m <= 2) ? raw_y-1 : raw_y;
    const C=floor(y/100);
    const L=5*C+floor(C/4);
    const Y=y%100;
    return (d+floor(26*(m+1)/10)+Y+floor(Y/4)+L)%7;
}

export const isLeapYear=(y)=>{
    return //
}