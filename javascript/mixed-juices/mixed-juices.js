// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if (name === 'Pure Strawberry Joy'){
    return 0.5
  } else if (name === 'Energizer' || name === 'Green Garden'){
    return 1.5;
  } else if (name === 'Tropical Island'){
    return 3;
  } else if (name === 'All or Nothing'){
    return 5;
  } else {
    return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0;
    if(wedgesNeeded === 0 ){
      return count;
    } else {
        while (wedgesNeeded > 0){
          if(limes[count] === 'large'){
            wedgesNeeded -= 10;
          } else if (limes[count] === 'medium') {
           wedgesNeeded -= 8;
          } else if (limes[count] === 'small') {
            wedgesNeeded -= 6;
          } else { 
            wedgesNeeded = 0
            count--;
          }
          count++;
        }
      }
      return count;
  }


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders.shift())
    }
  return orders;
}
