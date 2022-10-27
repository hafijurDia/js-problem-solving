//finding leap year by function

function leapYear(year) { 
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return year + ' is leap year';
    }else{
        return year + ' is not leap year';
    }
 }

let result = leapYear(2036);
 console.log(result);