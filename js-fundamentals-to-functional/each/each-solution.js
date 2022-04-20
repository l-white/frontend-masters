const _ = {};

_.each = function(list, callback){

    // check to see if item is an array
    if (Array.isArray(list)){
        // loop through the list     
        for (var i = 0; i < list.length; i++){
            // call the callback with a list item
            callback(list[i], i, list)
        }
    } else {
        for (let key in list){
            callback(list[key], key, list)
       }
    }
}
