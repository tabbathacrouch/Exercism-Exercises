/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (remainingTime) {
    if (remainingTime > 0){
        return 'Not done, please wait.'
    } else if (remainingTime === 0){
        return 'Lasagna is done.'
    } else {
        return 'You forgot to set the timer.'
    }
}

export function preparationTime (layers, time = 2) {
    return layers.length * time
}

export function quantities (layers) {
    const noodlesCount = layers.filter((x) => x==='noodles').length
    const sauceCount = layers.filter((x) => x === 'sauce').length
    return {noodles: noodlesCount * 50, sauce: sauceCount * .2}
}

export function addSecretIngredient (friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe (recipe, numberOfPortions) {
    for (const [key, value] of Object.entries(recipe)){
        recipe[key] = value * (numberOfPortions / 2)
    } return recipe
}