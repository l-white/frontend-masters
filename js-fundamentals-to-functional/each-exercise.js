// Complete the rest of this function so that it works as described in the previous slides

// Iterate through each item in the list and call that callback with the values in that list, one at a time

// Test this function by running it with the code in the foreach.js file

const suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

const clueGame = {
    characters: ["Miss Scarlet", "Mr. Green", "Colonel Mustard", "Professor Plum", "Mrs. Peacock", "Mrs. White"],
    weapons: ["candlestick", "knife", "lead pipe", "revolver", "rope", "wrench"],
    rooms: ["kitchen", "ballroom", "conservatory", "dining room", "cellar", "billard room", "library", "lounge", "hall", "study"],
    confidential: []
  }

function each(list, callback) {
    if (Array.isArray(list) === true) {
        for (let i = 0; i < list.length; i++){
            callback(list[i], i, list)
        }
    } else if (typeof list === "object") {
        for (let key in list){
            callback(list[key], key, list)
          }
    } else {
        console.log("Not an array or an object");
    }
}

console.log(each(suspects, console.log))

each(['sally', 'georgie', 'anna'], function(name, i, list){
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1] + ".")
    } else {
        console.log(name, 'is the oldest.')
    }
    
})
console.log(each(clueGame, console.log))

  
  /*
  _.each(suspects, function(name) {
    let suspectObj = createSuspectObjects(name);
    suspectsList.push(suspectObj);
  })*/
