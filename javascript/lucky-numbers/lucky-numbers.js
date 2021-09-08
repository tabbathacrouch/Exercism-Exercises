// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const value1 = Number(array1.join().replace(/,/g,''))
  const value2 = Number(array2.join().replace(/,/g,''))
  return value1 + value2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value.toString().split("").reverse().join().replace(/,/g, '') === value.toString()
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let message = ''
  if(!input){
    message = 'Required field'
  } else if(isNaN(Number(input)) || Number(input) === 0){    
    message = 'Must be a number besides 0'
  }
  return message
}
