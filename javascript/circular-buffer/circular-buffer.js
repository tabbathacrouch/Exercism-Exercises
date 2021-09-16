//A circular buffer, cyclic buffer or ring buffer is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.
// A circular buffer first starts empty and of some predefined length. For example, this is a 7-element buffer:
// [ ][ ][ ][ ][ ][ ][ ]
// Assume that a 1 is written into the middle of the buffer (exact starting location does not matter in a circular buffer):
// [ ][ ][ ][1][ ][ ][ ]
// Then assume that two more elements are added — 2 & 3 — which get appended after the 1:
// [ ][ ][ ][1][2][3][ ]
// If two elements are then removed from the buffer, the oldest values inside the buffer are removed. The two elements removed, in this case, are 1 & 2, leaving the buffer with just a 3:
// [ ][ ][ ][ ][ ][3][ ]
// If the buffer has 7 elements then it is completely full:
// [5][6][7][8][9][3][4]
// When the buffer is full an error will be raised, alerting the client that further writes are blocked until a slot becomes free.
// When the buffer is full, the client can opt to overwrite the oldest data with a forced write. In this case, two more elements — A & B — are added and they overwrite the 3 & 4:
// [5][6][7][8][9][A][B]
// 3 & 4 have been replaced by A & B making 5 now the oldest data in the buffer. Finally, if two elements are removed then what would be returned is 5 & 6 yielding the buffer:
// [ ][ ][7][8][9][A][B]
// Because there is space available, if the client again uses overwrite to store C & D then the space where 5 & 6 were stored previously will be used not the location of 7 & 8. 7 is still the oldest element and the buffer is once again full.
// [C][D][7][8][9][A][B]

class CircularBuffer {
  constructor(capacity) {
    this.queue = [];
    this.head = -1;
    this.tail = -1;
    this.size = 0;
    this.capacity = capacity;
  }

  get isFull() {
    return this.capacity === this.size;
  }

  get isEmpty() {
    return this.size === 0;
  }

  write(item) {
    if(this.isFull){
      throw new BufferFullError();
    }
    this.queue[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.size++;
  }

  read() {
    let item = null;
    if(this.isEmpty){
      this.head = -1;
      this.tail = -1;
      throw new BufferEmptyError();
    } else {
      item = this.queue[this.head];
      this.queue[this.head] = null;
      this.head = (this.head + 1) % this.capacity;
      this.size--;
      return item;
    }
  }

  forceWrite(item) {
    if(!this.isFull){
      this.write(item)
    } else {
      this.queue[this.tail] = item;
      this.head = (this.head + 1) % this.capacity;
      this.tail = (this.tail + 1) % this.capacity;   
    }
  }

  clear() {
   this.queue = [];
   this.head = -1;
   this.tail = -1;
   this.size = 0;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super();
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super();
  }
}
