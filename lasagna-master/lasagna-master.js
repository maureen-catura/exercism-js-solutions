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

export function cookingStatus(remainingTime = null) {
    if (remainingTime === null) {
        return 'You forgot to set the timer.';
    } else if (remainingTime > 0) {
        return 'Not done, please wait.';
    }

    return 'Lasagna is done.';
}

export function preparationTime(layers, preparationTime = 2) {
    return layers.length * preparationTime;
}

export function quantities(layers) {
    let quantities = { noodles: 0, sauce: 0 };

    layers.forEach((layer) => {
        if (layer === 'noodles') quantities.noodles += 50;
        else if(layer === 'sauce') quantities.sauce += 0.2;
    });

    return quantities;
}

export function addSecretIngredient(friendsList, myList) {
    let secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient);
}

export function scaleRecipe(recipe, numberOfPortions) {
    let scaledRecipe = {};

    for (let key in recipe) {
    scaledRecipe[key] = recipe[key] * (numberOfPortions / 2);
    }

    return scaledRecipe;
}
