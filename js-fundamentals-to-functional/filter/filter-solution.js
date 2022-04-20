const _ = {};

_.filter = function(arr, cb){
  // create a new array
  const storage = [];
  // loop through list
  for (let i = 0; i < arr.length; i++)
    // check if callback returns true
    if (callback(arr[i], i, arr) === true){
      // if returns true, push into array
      storage.push(arr[i]);
    }
  // return new list
  return storage;
}

_.filterWithEach = function(arr, cb){
  const storage2 = [];
  _.each(arr, function(item, i, list){
    if (cb(item, i, list) === true){
      storage2.push(item);
    }
  })
}