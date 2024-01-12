import { DATE_COMPONENT_TEXT } from "../../constant/text";

// No Use
export function GetFarsiPrice(price) {
  let faPrice = e2p(price);
  let dotedFaPrice = "";
  const separator = ",";
  // console.log(faPrice);
  do {
    if (faPrice.length > 3) {
      dotedFaPrice =
        separator + faPrice.substr(faPrice.length - 3, 3) + dotedFaPrice;
      faPrice = faPrice.slice(0, faPrice.length - 3);
    } else {
      dotedFaPrice = faPrice.substr(0, faPrice.length) + dotedFaPrice;
      faPrice = "";
    }
  } while (faPrice.length > 0);
  return dotedFaPrice;
}

//==========================================================

export function p2e(s) {
  return s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}
export function e2p(s) {
  return s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
//==========================================================

//==========================================================
export function dayNumberToName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "شنبه";

    case 1:
      return "یکشنبه";

    case 2:
      return "دوشنبه";

    case 3:
      return "سه‌شنبه";

    case 4:
      return "چهارشنبه";

    case 5:
      return "پنجشنبه";

    case 6:
      return "جمعه";

    default:
      return "شنبه";
  }
}
//==========================================================
export function monthNumberToName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "فروردین";
    case 2:
      return "اردیبهشت";
    case 3:
      return "خرداد";
    case 4:
      return "تیر";
    case 5:
      return "مرداد";
    case 6:
      return "شهریور";
    case 7:
      return "مهر";
    case 8:
      return "آبان";
    case 9:
      return "آذر";
    case 10:
      return "دی";
    case 11:
      return "بهمن";
    case 12:
      return "اسفند";

    default:
      return "اسفند";
  }
}
//==========================================================

//==========================================================
export function getNextMonthFirstDay(dayNumber, _dayWeekNumber, monthDays) {
  let copyOfDayNumber = dayNumber;
  // alert("_dayNumber  " + dayNumber);
  let dayWeekNumber = _dayWeekNumber;
  // alert("_dayWeekNumber  " + _dayWeekNumber);
  while (copyOfDayNumber <= monthDays) {
    if (dayWeekNumber < 6) {
      dayWeekNumber++;
    } else {
      dayWeekNumber = 0;
    }
    copyOfDayNumber++;
  }
  return dayWeekNumber;
}
//==========================================================
//==========================================================
export function GetNextMonth(monthNumber) {
  if (monthNumber >= 12) return 1;
  else return monthNumber + 1;
}

////Used Methods
/////New Funcs/////New Funcs/////New Funcs/////New Funcs/////New Funcs/////New Funcs/////New Funcs////

//Get Date in Shams
export function GetDate(dateString) {
  const myTime = Date.parse(dateString);
  // console.log(myTime);
  const todayFa = {
    day: getDateFormat(myTime, { day: "2-digit" }),
    month: getDateFormat(myTime, { month: "numeric" }),
    monthTitle: getDateFormat(myTime, { month: "long" }),
    year: getDateFormat(myTime, { year: "numeric" }),
    dayWeek: getDateFormat(myTime, { weekday: "long" }),
    firstDayIndex: getFirstDay(
      getDateFormat(myTime, { day: "2-digit" }),
      dayNameToNumber(getDateFormat(myTime, { weekday: "long" }))
    ),
    yearEn: Number(p2e(getDateFormat(myTime, { year: "numeric" }))),
    monthEn: Number(p2e(getDateFormat(myTime, { month: "numeric" }))),
    dayEn: Number(p2e(getDateFormat(myTime, { day: "2-digit" }))),
    dayCount: GetMonthDays(
      Number(p2e(getDateFormat(myTime, { month: "numeric" })))
    ),
  };

  function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    return date;
  }
  // console.log(todayFa);
  return todayFa;

  /*
  {
    day: "۰۱",
    dayWeek: "جمعه",
    month: "۱۱",
    monthTitle: "بهمن",
    year: "۱۴۰۰"
  }
  */
}
export function GetMonthDays(monthNumber, year = 1402) {
  const lastLeapYear = 1399;
  //todayDate.month
  if (monthNumber == 13) return 31;
  return monthNumber < 7
    ? 31
    : monthNumber == 12
    ? (year - lastLeapYear) % 4 == 0
      ? 30
      : 29
    : 30;
}
export function getFirstDay(dayNumber, _dayWeekNumber) {
  let copyOfDayNumber = dayNumber % 7;
  let dayWeekNumber = _dayWeekNumber;
  while (copyOfDayNumber > 1) {
    if (dayWeekNumber > 0) {
      dayWeekNumber--;
    } else {
      dayWeekNumber = 6;
    }
    copyOfDayNumber--;
  }
  return dayWeekNumber;
}
export function getNextMonth(thisMonth, nextMonth = 1) {
  const monthIndex = thisMonth + nextMonth;
  return monthIndex > 12
    ? {
        name: DATE_COMPONENT_TEXT.monthNames[monthIndex % 12],
        monthIndex: monthIndex % 12,
      }
    : {
        name: DATE_COMPONENT_TEXT.monthNames[monthIndex],
        monthIndex: monthIndex,
      };
}

export function dayNameToNumber(dayName) {
  switch (dayName) {
    case "شنبه":
      return 0;

    case "یکشنبه":
      return 1;

    case "دوشنبه":
      return 2;

    case "سه‌شنبه":
      return 3;

    case "چهارشنبه":
      return 4;

    case "پنجشنبه":
      return 5;

    case "جمعه":
      return 6;

    default:
      return 0;
  }
}
function GetMonthsFirstDay(refMonth, nextMonth = 1) {
  const refDayStartIndex = refMonth.firstDayIndex;
  let dayCounter = refMonth.dayCount;

  for (let monthCounter = 0; monthCounter < nextMonth; monthCounter++) {
    const year = GetYear(refMonth, monthCounter);
    const unKnowMonthDays = GetMonthDays(
      GetMonthIndex(GetMonthNumber(refMonth, monthCounter)),
      year
    );
    dayCounter += unKnowMonthDays;
  }
  const dayIndex = (dayCounter + refDayStartIndex) % 7;

  return dayIndex;
}

function GetMonthNumber(DateRef, nextMonthCount) {
  return DateRef.monthEn + nextMonthCount;
}
function GetMonthIndex(monthNumber) {
  return monthNumber > 12 ? monthNumber % 12 : monthNumber;
}
function GetYear(DateRef, nextMonthCount) {
  const month = GetMonthNumber(DateRef, nextMonthCount);
  const year =
    month > 12 ? DateRef.yearEn + parseInt(month / 12) : DateRef.yearEn;
  return year;
}
export function GetFullDataForMonth(thisMonthData, nextMonth = 0) {
  if (nextMonth === 0) {
    return {
      year: thisMonthData.yearEn,
      monthName: DATE_COMPONENT_TEXT.monthNames[thisMonthData.monthEn],
      dayCount: thisMonthData.dayCount,
      dayStartIndex: thisMonthData.firstDayIndex,
    };
  } else {
    const newMonth = GetMonthNumber(thisMonthData, nextMonth);
    const year = GetYear(thisMonthData, nextMonth);
    const month = GetMonthIndex(newMonth);
    const dayCount = GetMonthDays(month, year);
    const dayStartIndex = GetMonthsFirstDay(thisMonthData, nextMonth);
    return {
      year: year,
      monthName: DATE_COMPONENT_TEXT.monthNames[month],
      dayStartIndex: dayStartIndex,
      dayCount: dayCount,
    };
  }

  // year: dateInfoFa.yearEn,
  // monthName: dateInfoFa.monthTitle,
  // dayCount: 30,
  // dayStartIndex: 4,
}
