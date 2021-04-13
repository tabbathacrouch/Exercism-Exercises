// exercism --> simple linked list
// Write a simple linked list implementation that uses Elements and a List.
// The linked list is a fundamental data structure in computer science, often used in the implementation of other data structures. They're pervasive in functional programming languages, such as Clojure, Erlang, or Haskell, but far less common in imperative languages such as Ruby or Python.
// The simplest kind of linked list is a singly linked list. Each element in the list contains data and a "next" field pointing to the next element in the list of elements.
// This variant of linked lists is often used to represent sequences or push-down stacks (also called a LIFO stack; Last In, First Out).
// As a first take, lets create a singly linked list to contain the range (1..10), and provide functions to reverse a linked list and convert to and from arrays.
// When implementing this in a language with built-in linked lists, implement your own abstract data type.

export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor(arr = []) {
    this.count = 0;
    this.head = null;
    arr.forEach((e) => this.add(new Element(e)));
  }

  get length() {
    return this.count;
  }

  add(newValue) {
    this.head = { ...newValue, next: this.head };
    this.count++;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}
