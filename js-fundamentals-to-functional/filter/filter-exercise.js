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
  if (num > 5){
    return true;
  } else {
    return false;
  }
}

filterWithLoop(numList, greaterThanFive);
console.log(newList);