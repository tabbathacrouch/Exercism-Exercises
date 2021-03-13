// exercism --> clock
// Implement a clock that handles times without dates.
// You should be able to add and subtract minutes to it.
// Two clocks that represent the same time should be equal to each other.

export class Clock {
  constructor(hour, minute = 0) {
    this.minute = hour * 60 + minute;
  }

  toString() {
    let hour = Math.floor(this.minute / 60) % 24;
    if (hour < 0) {
      hour += 24;
    }
    let minute = this.minute % 60;
    if (minute < 0) {
      minute += 60;
    }
    return hour
      .toString()
      .padStart(2, "0")
      .concat(":", minute.toString().padStart(2, "0"));
  }

  plus(minute) {
    this.minute += minute;
    return this;
  }

  minus(minute) {
    this.minute -= minute;
    return this;
  }

  equals(compare) {
    return this.toString() === compare.toString();
  }
}
