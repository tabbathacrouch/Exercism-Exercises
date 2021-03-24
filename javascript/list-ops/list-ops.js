// exercism --> list ops
// Implement basic list operations.
// In functional languages list operations like length, map, and reduce are very common. Implement a series of basic list operations, without using existing functions.
// The precise number and names of the operations to be implemented will be track dependent to avoid conflicts with existing names, but the general operations you will implement include:
// append (given two lists, add all items in the second list to the end of the first list);
// concatenate (given a series of lists, combine all items in all lists into one flattened list);
// filter (given a predicate and a list, return the list of all items for which predicate(item) is True);
// length (given a list, return the total number of items within it);
// map (given a function and a list, return the list of the results of applying function(item) on all items);
// foldl (given a function, a list, and initial accumulator, fold (reduce) each item into the accumulator from the left using function(accumulator, item));
// foldr (given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator from the right using function(item, accumulator));
// reverse (given a list, return a list with all the original items, but in reversed order);
// Using core language features to build and deconstruct arrays via destructuring, and using the array literal [] are allowed, but no functions from the Array.prototype should be used.

export class List {
  constructor(list = []) {
    this.values = list;
  }

  // given two lists, add all items in the second list to the end of the first list
  append(newList) {
    this.values = [...this.values, ...newList.values];
    return new List(this.values);
  }

  // helper function for concat()
  flatten(lists) {
    const acc = new List(this.values);
    for (let i = 0; i < lists.length; i++) {
      acc.append(lists[i]);
    }
    return acc;
  }

  // given a series of lists, combine all items in all lists into one flattened list
  concat(list) {
    if (list["values"]) {
      return this.flatten(list["values"]);
    }
    return new List([...this.values, ...list.values]);
  }

  // given a predicate and a list, return the list of all items for which predicate(item) is True
  filter(filterFunction) {
    const filteredList = new List();
    for (let i = 0; i < this.length(); i++) {
      if (filterFunction(this.values[i])) {
        filteredList.values = [...filteredList.values, this.values[i]];
      }
    }
    return filteredList;
  }

  // given a function and a list, return the list of the results of applying function(item) on all items
  map(mapFunction) {
    const mappedList = new List();
    for (let i = 0; i < this.length(); i++) {
      mappedList.values = [...mappedList.values, mapFunction(this.values[i])];
    }
    return mappedList;
  }

  // given a list, return the total number of items within it
  length() {
    let count = 0;
    // eslint-disable-next-line no-unused-vars
    for (let x in this.values) {
      count++;
    }
    return count;
  }

  // given a function, a list, and initial accumulator, fold (reduce) each item into the accumulator from the left using function(accumulator, item)
  foldl(foldFunction, initial) {
    let acc = initial;
    for (let i = 0; i < this.length(); i++) {
      acc = +foldFunction(acc, this.values[i]);
    }
    return acc;
  }

  // given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator from the right using function(item, accumulator)
  foldr(foldFunction, initial) {
    let acc = initial;
    for (let i = this.length() - 1; i > -1; i--) {
      acc = +foldFunction(acc, this.values[i]);
    }
    return acc;
  }

  // given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator from the right using function(item, accumulator)
  reverse() {
    const reversedList = new List();
    for (let i = this.length() - 1; i > -1; i--) {
      reversedList.values = [...reversedList.values, this.values[i]];
    }
    this.values = [...reversedList.values];
    return this;
  }
}
