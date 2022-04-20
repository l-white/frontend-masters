// Implement ._map() as weith ._each(). Can use a loop or ._each()

/*

callbackfn should be a function that accepts three arguments. map calls callbackfn once for each element in the array, in ascending order, and constructs a new Array from the results. callbackfn is called only for elements of the array which actually exist; it is not called for missing elements of the array.

If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackfn. If it is not provided, undefined is used instead.

callbackfn is called with three arguments: the value of the element, the index of the element, and the object being traversed.

map does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.

The range of elements processed by map is set before the first call to callbackfn. Elements which are appended to the array after the call to map begins will not be visited by callbackfn. If existing elements of the array are changed, their value as passed to callbackfn will be the value at the time map visits them; elements that are deleted after the call to map begins and before being visited are not visited.
*/

const _ = {};

const newList = [];

const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function(item){
    return `broken ${item}`
}


function map(list, callback) {
    // check to see if item is an array
    if (Array.isArray(list)){
        // loop through the list     
        for (let i = 0; i < list.length; i++){
            // call the callback with a list item
            newList.push(callback(list[i], i, list));
        }
    } else {
        console.log("Not an array")
    }
    return newList;
}
console.log(map([1, 2, 3,], function(val) {return val + 1})); // [2, 3, 4]
console.log(map(weapons, makeBroken)); // [2, 3, 4, 'broken candlestick', 'broken lead pipe', 'broken revolver']

