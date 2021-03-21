// exercism --> linked list
// Implement a doubly linked list.
// Like an array, a linked list is a simple linear data structure. Several common data types can be implemented using linked lists, like queues, stacks, and associative arrays.
// A linked list is a collection of data elements called nodes. In a singly linked list each node holds a value and a link to the next node. In a doubly linked list each node also holds a link to the previous node.
// You will write an implementation of a doubly linked list. Implement a Node to hold a value and pointers to the next and previous nodes. Then implement a List which holds references to the first and last node and offers an array-like interface for adding and removing items:
// push (insert value at back);
// pop (remove value at back);
// shift (remove value at front).
// unshift (insert value at front);
// To keep your implementation simple, the tests will not cover error conditions. Specifically: pop or shift will never be called on an empty list.
// If you want to know more about linked lists, check Wikipedia.
// Your list must also implement the following interface:
// delete (delete the first occurence of a specified value)
// count (count the number of items in the list)
// NOTE: Do not use a library to implement this exercise. Do not use a backing array to implement this exercise.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert value at back
  push(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = this.tail.next;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
  }

  // remove value at back
  pop() {
    const lastValue = this.tail.value;
    this.tail = this.tail.previous;
    this.length--;
    return lastValue;
  }

  // remove value at front
  shift() {
    const firstValue = this.head.value;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return firstValue;
  }

  // insert value at front
  unshift(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = this.head.previous;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
  }

  // delete the first occurence of a specified value
  delete(value) {
    if (this.length === 1 && this.head.value === value) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          if (currentNode.previous) {
            currentNode.previous.next = currentNode.next;
          } else {
            this.head = null;
          }
          if (currentNode === this.tail) {
            this.tail = this.tail.previous;
          } else {
            currentNode.next.previous = currentNode.previous;
          }
          this.length--;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }

  // count the number of items in the list
  count() {
    return this.length;
  }
}
