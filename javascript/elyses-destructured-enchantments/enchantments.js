/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */

// instructions say 'without using the array[index] or .shift()'
export function getFirstCard(deck) {
  let [first, ...rest] = deck
  return first
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */

// instructions say 'without using the array[index]'
export function getSecondCard(deck) {
  let [first, second, ...rest] = deck
  return second
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */

// instructions say 'She doesn't need to call a single function.'
export function swapTopTwoCards(deck) {
  let [first, second, ...rest] = deck
  return [second, first, ...rest]
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */

export function discardTopCard(deck) {
  let [first, ...rest] = deck
  return [first, [...rest]]
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  let [first, ...rest] = deck
  return [first, ...FACE_CARDS, ...rest]
}
