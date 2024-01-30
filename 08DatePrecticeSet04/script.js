// // 1. Write a JavaScript function to check whether an `input` is a date object or not.
// function isDate(input) {
//     return input instanceof Date;
// }

// // Test Data :
// console.log(isDate("October 13, 2014 11:13:00"));
// console.log(isDate(new Date(86400000)));
// console.log(isDate(new Date(99,5,24,11,33,30,0)));
// console.log(isDate([1, 2, 4, 0]));



// // 2. Write a JavaScript function to get the current date.
// function curday(value) {
//     if (value === "/") {
//         return new Date("2024/1/23").toLocaleDateString();
//     }
//     else if (value === "-") {
//         let nDate = new Date();
//         return `${nDate.getMonth()+1}-${nDate.getDate()}-${nDate.getFullYear()}`;
//     }
// }

// // Test Data:
// console.log(curday('/'));
// console.log(curday('-'));



// // 3. Write a JavaScript function to get the number of days in a month.
// function getDaysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }

// // Test Data:
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));



// // 4. Write a JavaScript function to get the month name from a particular date.
// function month_name(value) {
//     return new Date(value).toLocaleDateString("default", {
//         month: "long"
//     })
// }

// // Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));



// // 5. Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
// function compare_dates(value1, value2) {
//     const date1 = value1.getTime();
//     const date2 = value2.getTime();
//     if (date1 === date2) {
//         return `Date1 = Date2`
//     }
//     else if (date1 > date2) {
//         return `Date1 > Date2`
//     }
//     else if (date2 > date1) {
//         return `Date1 < Date2`
//     }
// }

// // Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));



// // 6. Write a JavaScript function to add specified minutes to a Date object.
// function is_weekend(value) {
//   const weekDay = new Date(value).toLocaleDateString("default", {
//     weekday: "long",
//   });

//   if (weekDay === "Saturday" || weekDay === "Sunday") {
//     return "WeekDay";
//   }
// }

// // Test Data :
// console.log(is_weekend("Nov 15, 2014"));
// console.log(is_weekend("Nov 16, 2014"));
// console.log(is_weekend("Nov 17, 2014"));



// // 7. Write a JavaScript function to add specified minutes to a Date object.
// function add_minutes(date, minutes) {
//   const millisecondsToAdd = minutes * 60 * 1000; 
//   const updatedDate = new Date(date.getTime() + millisecondsToAdd); 
//   return updatedDate; 
// }

// // Test Data :
// console.log(add_minutes(new Date(2014,10,2), 30).toString());



// // 8. Write a JavaScript function to get the difference between two dates in days.
// function date_diff_indays(date1, date2) {
//   const time1 = new Date(date1);
//   const time2 = new Date(date2);

//   const timen = time2 - time1;
//   return timen / (1000 * 60 * 60 * 24)
// }

// // Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));



// // 9. Write a JavaScript function to get the last day of a month.
// function lastday(year, month) {
//     return new Date(year, month+1, 0).getDate();
// }

// // Test Data :
// console.log(lastday(2014,0));
// console.log(lastday(2014,1));
// console.log(lastday(2014,11));



// // 10. Write a JavaScript function to calculate 'yesterday's day.
// function yesterday(value) {
//   const ys_dt = new Date(value)
//   return new Date(ys_dt.setDate(ys_dt.getDate() - 1)).toString();
// }


// // Test Data :
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));


