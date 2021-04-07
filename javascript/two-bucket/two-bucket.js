// exercism --> two bucket
// Given two buckets of different size, demonstrate how to measure an exact number of liters
// by strategically transferring liters of fluid between the buckets.
// Since this mathematical problem is fairly subject to interpretation / individual approach, the tests have been written specifically to expect one overarching solution.
// To help, the tests provide you with which bucket to fill first. That means, when starting with the larger bucket full, you are NOT allowed at any point to have the smaller bucket full and the larger bucket empty (aka, the opposite starting point); that would defeat the purpose of comparing both approaches!
// Your program will take as input:
// the size of bucket one
// the size of bucket two
// the desired number of liters to reach
// which bucket to fill first, either bucket one or bucket two
// Your program should determine:
// the total number of "moves" it should take to reach the desired number of liters, including the first fill
// which bucket should end up with the desired number of liters (let's say this is bucket A) - either bucket one or bucket two
// how many liters are left in the other bucket (bucket B)
// Note: any time a change is made to either or both buckets counts as one (1) move.
// Example: Bucket one can hold up to 7 liters, and bucket two can hold up to 11 liters. Let's say bucket one, at a given step, is holding 7 liters, and bucket two is holding 8 liters (7,8). If you empty bucket one and make no change to bucket two, leaving you with 0 liters and 8 liters respectively (0,8), that counts as one "move". Instead, if you had poured from bucket one into bucket two until bucket two was full, leaving you with 4 liters in bucket one and 11 liters in bucket two (4,11), that would count as only one "move" as well.
// To conclude, the only valid moves are:
// pouring from either bucket to another
// emptying either bucket and doing nothing to the other
// filling either bucket and doing nothing to the other
// Written with <3 at Fullstack Academy by Lindsay Levine.

// helper function
function gcd(x, y) {
  if (y) {
      return gcd(y, x % y);
  } else {
      return Math.abs(x);
  }
}

export class TwoBucket {
  constructor(bucketOne, bucketTwo, goal, starterBucket) {
    this.goal = goal;
    this.starterBucket = starterBucket;
    this.one = {
      name: "one",
      value: 0,
      maxValue: bucketOne,
    };
    this.two = {
      name: "two",
      value: 0,
      maxValue: bucketTwo,
    };
  }

  moves() {
    if (
      this.goal % gcd(this.two.maxValue, this.one.maxValue) ||
      this.goal > Math.max(this.two.maxValue, this.one.maxValue)
    ) {
      throw new Error("Not possible");
    }
    let startBucket,
      otherBucket,
      stepCount = 1;

    if (this.starterBucket === "one") {
      startBucket = this.one;
      otherBucket = this.two;
    } else {
      startBucket = this.two;
      otherBucket = this.one;
    }

    startBucket.value = startBucket.maxValue;

    while (startBucket.value !== this.goal && otherBucket.value !== this.goal) {
      if (otherBucket.maxValue === this.goal) {
        otherBucket.value = otherBucket.maxValue;
        stepCount++;
      } else {

        if (otherBucket.value === otherBucket.maxValue) {
          otherBucket.value = 0;
          stepCount++;
        }

        if (startBucket.value === 0) {
          startBucket.value = startBucket.maxValue;
          stepCount++;
        }

        if (startBucket.value + otherBucket.value <= otherBucket.maxValue) {
          otherBucket.value += startBucket.value;
          startBucket.value = 0;
          stepCount++;
        } else {
          startBucket.value += otherBucket.value - otherBucket.maxValue;
          otherBucket.value = otherBucket.maxValue;
          stepCount++;
        }
      }
    }

    return stepCount;
  }

  get goalBucket() {
    return this.goal === this.one.value ? this.one.name : this.two.name;
  }

  get otherBucket() {
    return this.goal === this.one.value ? this.two.value : this.one.value;
  }
}