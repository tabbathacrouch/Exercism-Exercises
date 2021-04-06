// exercism --> custom set
// Create a custom set type.
// Sometimes it is necessary to define a custom data structure of some type, like a set.
// In this exercise you will define your own set.
// How it works internally doesn't matter, as long as it behaves like a set of unique elements.

export class CustomSet {
  constructor(set) {
    this.set = set;
  }

  empty() {
    return !this.set ? true : false;
  }

  contains(value) {
    return !this.set || !this.set.includes(value) ? false : true;
  }

  add(value) {
    if (!this.set) {
      this.set = [];
    }
    if (!this.set.includes(value)) {
      this.set.push(value);
    }
    return this;
  }

  subset(newSet) {
    if (this.set && !newSet.set) {
      return false;
    } else {
      return !this.set ||
        newSet.set.filter((e) => this.set.includes(e)).toString() ===
          this.set.toString()
        ? true
        : false;
    }
  }

  disjoint(newSet) {
    return !this.set ||
      this.set.filter((e) => newSet.set.includes(e)).length === 0
      ? true
      : false;
  }

  eql(newSet) {
    if (!this.set) {
      this.set = [];
    }
    if (!newSet.set) {
      newSet.set = [];
    }
    return this.set.every((e) => newSet.set.includes(e)) &&
      newSet.set.every((e) => this.set.includes(e)) &&
      this.set.length === newSet.set.length
      ? true
      : false;
  }

  union(newSet) {
    if (!this.set && !newSet.set) {
      return new CustomSet();
    }
    if (!this.set) {
      this.set = [];
    }
    if (!newSet.set) {
      newSet.set = [];
    }
    this.set.push(newSet.set);
    const uniqueSet = this.set
      .flat()
      .filter((e, index, array) => array.indexOf(e) === index)
      .sort();
    return new CustomSet(uniqueSet);
  }

  intersection(newSet) {
    if (!this.set && !newSet.set) {
      return new CustomSet();
    } else if (!this.set && newSet.set) {
      return new CustomSet([]);
    } else {
      return new CustomSet(this.set.filter((e) => newSet.set.includes(e)));
    }
  }

  difference(newSet) {
    if (!this.set) {
      return new CustomSet();
    } else if (!newSet.set) {
      return new CustomSet(this.set);
    } else {
      return new CustomSet(this.set.filter((e) => !newSet.set.includes(e)));
    }
  }
}
