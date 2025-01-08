import dayjs, { Dayjs } from "dayjs";

export function getMonthMatrix(month=dayjs().month()){
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year,month,1)).day(); // 0~6 sun~sat

    let monthFirstDayCount = 0-firstDayOfMonth;
    console.log("First day of the month is..", monthFirstDayCount);

    return new Array(5).fill([]) // weekArray
    .map(()=>{
        return new Array(7).fill(null).map(()=>{
            const day = dayjs(new Date(year, month, monthFirstDayCount+1));
             // 달의 1일은 1이라서 0이면 1일의 전날, -1이면 1일의 2일 전
            monthFirstDayCount++;
            return day;
        })
    })
}


export const isSameDate = (day1:Dayjs, day2:Dayjs)=>{
    return day1.isSame(day2, 'month') && day1.isSame(day2, 'year') && day1.isSame(day2, 'day');
}