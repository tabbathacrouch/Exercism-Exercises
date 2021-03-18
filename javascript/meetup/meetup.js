// exercism --> meetup
// Calculate the date of meetups.
// Typically meetups happen on the same day of the week. In this exercise, you will take a description of a meetup date, and return the actual meetup date.
// Examples of general descriptions are:
// The first Monday of January 2017
// The third Tuesday of January 2017
// The wednesteenth of January 2017
// The last Thursday of January 2017
// The descriptors you are expected to parse are: first, second, third, fourth, fifth, last, monteenth, tuesteenth, wednesteenth, thursteenth, friteenth, saturteenth, sunteenth
// Note that "monteenth", "tuesteenth", etc are all made up words. There was a meetup whose members realized that there are exactly 7 numbered days in a month that end in '-teenth'. Therefore, one is guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is named with '-teenth' in every month.
// Given examples of a meetup dates, each containing a month, day, year, and descriptor calculate the date of the actual meetup. For example, if given "The first Monday of January 2017", the correct meetup date is 2017/1/2.
// In Javascript, the Date object month's index ranges from 0 to 11.
// const date = new Date('2020-06-13');
// date.getFullYear();
// // => 2020
// date.getMonth();
// // => 5 (instead of 6)
// date.getDate();
// // => 13

export const meetup = (year, month, descriptor, weekday) => {
  if (descriptor === "teenth") {
    return getDate(13, 19, year, month, weekday);
  } else if (descriptor === "first") {
    return getDate(1, 7, year, month, weekday);
  } else if (descriptor === "second") {
    return getDate(8, 14, year, month, weekday);
  } else if (descriptor === "third") {
    return getDate(15, 21, year, month, weekday);
  } else if (descriptor === "last" && month !== 2) {
    return getDate(25, 31, year, month, weekday);
  } else if (descriptor === "last" && month === 2 && isLeap(year)) {
    return getDate(23, 29, year, month, weekday);
  } else {
    return getDate(22, 28, year, month, weekday);
  }
};

const weekdays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

function isLeap(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getDate(iMin, iMax, year, month, weekday) {
  for (let i = iMin; i <= iMax; i++) {
    const date = new Date(year, month - 1, i);
    if (date.getDay() === weekdays[weekday]) {
      return date;
    }
  }
}

// -----1st attempt-----
// export const meetup = (year, month, descriptor, weekday) => {
//   const weekdays = {
//     Sunday: 0,
//     Monday: 1,
//     Tuesday: 2,
//     Wednesday: 3,
//     Thursday: 4,
//     Friday: 5,
//     Saturday: 6,
//   };

//   if (descriptor === "teenth") {
//     for (let i = 13; i <= 19; i++) {
//       const date = new Date(year, month - 1, i);
//       if (date.getDay() === weekdays[weekday]) {
//         return date;
//       }
//     }
//   } else if (descriptor === "first") {
//     for (let i = 1; i <= 7; i++) {
//       const date = new Date(year, month - 1, i);
//       if (date.getDay() === weekdays[weekday]) {
//         return date;
//       }
//     }
//   } else if (descriptor === "second") {
//     for (let i = 8; i <= 14; i++) {
//       const date = new Date(year, month - 1, i);
//       if (date.getDay() === weekdays[weekday]) {
//         return date;
//       }
//     }
//   } else if (descriptor === "third") {
//     for (let i = 15; i <= 21; i++) {
//       const date = new Date(year, month - 1, i);
//       if (date.getDay() === weekdays[weekday]) {
//         return date;
//       }
//     }
//   } else if (descriptor === "fourth") {
//     for (let i = 22; i <= 28; i++) {
//       const date = new Date(year, month - 1, i);
//       if (date.getDay() === weekdays[weekday]) {
//         return date;
//       }
//     }
//   } else if (descriptor === "last") {
//     if (month !== 2) {
//       for (let i = 25; i <= 31; i++) {
//         const date = new Date(year, month - 1, i);
//         if (date.getDay() === weekdays[weekday]) {
//           return date;
//         }
//       }
//     } else {
//       if (isLeap(year)) {
//         for (let i = 23; i <= 29; i++) {
//           const date = new Date(year, month - 1, i);
//           if (date.getDay() === weekdays[weekday]) {
//             return date;
//           }
//         }
//       } else {
//         for (let i = 22; i <= 28; i++) {
//           const date = new Date(year, month - 1, i);
//           if (date.getDay() === weekdays[weekday]) {
//             return date;
//           }
//         }
//       }
//     }
//   }
// };

// function isLeap(year) {
//   if (year % 400 === 0) {
//     return true;
//   }
//   if (year % 100 === 0) {
//     return false;
//   }
//   if (year % 4 === 0) {
//     return true;
//   }
//   return false;
// }
