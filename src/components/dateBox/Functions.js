export function GetFarsiPrice(price) {
  let faPrice = e2p(price);
  let dotedFaPrice = "";
  const separator=",";
  // console.log(faPrice);
  do {
    if (faPrice.length > 3) {
      dotedFaPrice = separator+ faPrice.substr(faPrice.length - 3, 3) + dotedFaPrice;
      faPrice = faPrice.slice(0, faPrice.length - 3);
    
    } else {
      dotedFaPrice = faPrice.substr(0, faPrice.length) + dotedFaPrice;
      faPrice = "";
    }
   
  } while (faPrice.length > 0);
  return dotedFaPrice;
}

//==========================================================

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
export function p2e(s) {
  return s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}
export function e2p(s) {
  return s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
//==========================================================
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
export function getFirstDay(dayNumber, _dayWeekNumber) {
  let copyOfDayNumber = dayNumber;
  // alert("_dayNumber  " + dayNumber);
  let dayWeekNumber = _dayWeekNumber;
  // alert("_dayWeekNumber  " + _dayWeekNumber);
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
export function GetMonthDays(monthNumber) {
  //todayDate.month
  if (monthNumber == 13) return 31;
  return monthNumber < 7 ? 31 : monthNumber == 12 ? 29 : 30;
}
//==========================================================
export function GetNextMonth(monthNumber) {
  if (monthNumber >= 12) return 1;
  else return monthNumber + 1;
}
