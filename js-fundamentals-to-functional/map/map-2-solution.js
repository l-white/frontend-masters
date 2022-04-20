const _ = {};

_.map = function(list, callback){
  var storage = [];

  _.each(list, function(v, i, list){
    storage.push(callback(v, i, list));
  });
  
  return storage;
}