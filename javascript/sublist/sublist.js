// exercism --> sublist
// Given two lists determine if the first list is contained within the second list, if the second list is contained within the first list, if both lists are contained within each other or if none of these are true.
// Specifically, a list A is a sublist of list B if by dropping 0 or more elements from the front of B and 0 or more elements from the back of B you get a list that's completely equal to A.
// Examples:
// A = [1, 2, 3], B = [1, 2, 3, 4, 5], A is a sublist of B
// A = [3, 4, 5], B = [1, 2, 3, 4, 5], A is a sublist of B
// A = [3, 4], B = [1, 2, 3, 4, 5], A is a sublist of B
// A = [1, 2, 3], B = [1, 2, 3], A is equal to B
// A = [1, 2, 3, 4, 5], B = [2, 3, 4], A is a superlist of B
// A = [1, 2, 4], B = [1, 2, 3, 4, 5], A is not a superlist of, sublist of or equal to B

export class List {
  constructor(first) {
    this.list = first || [];
  }

  compare(second) {
    let list1 = this.list.toString();
    let list2 = second.list.toString();
    if (list1 === list2) {
      return "EQUAL";
    } else if (list2.includes(list1)) {
      return "SUBLIST";
    } else if (list1.includes(list2)) {
      return "SUPERLIST";
    } else {
      return "UNEQUAL";
    }
  }
}

// -----1st attempt----- (did not pass 3 tests)
// export class List {
//   constructor(first) {
//     this.list = first || [];
//   }

//   compare(second) {
//     const firstContainsSecond = this.list.every((value) => second.list.includes(value));
//     const secondContainsFirst = second.list.every((value) => this.list.includes(value));
//     if (firstContainsSecond && secondContainsFirst && this.list.length === second.list.length) {
//       return 'EQUAL';
//     }
//     else if (firstContainsSecond || this.list.length === 0){
//       return 'SUBLIST';
//     }
//     else if (secondContainsFirst || second.list.length === 0){
//       return 'SUPERLIST';
//     }
//     else {
//       return 'UNEQUAL';
//     }
//   }
// }
