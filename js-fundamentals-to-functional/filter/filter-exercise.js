const newList = [];

function filterWithLoop(list, callback){
  // return a new array that will only contain the values that return true from the callback function
  for (let i = 0; i < list.length; i++){
    if (callback(list[i], i, list) === true){
      newList.push(list[i]);
    }
  }
}

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function greaterThanFive(num){
  // if number in list is greater than five, return true, else return false
  return num > 5 ? true : false;
}

filterWithLoop(numList, greaterThanFive);
console.log(newList); // [6, 7, 8, 9, 10]