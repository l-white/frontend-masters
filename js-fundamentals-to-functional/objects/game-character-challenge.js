// Create a clue game and represent it as an object in an array

/*
Board game -- pieces in a board
characters, weapons, room
confidential -- has these three items
*/

const clueGame = {
  characters: ["Miss Scarlet", "Mr. Green", "Colonel Mustard", "Professor Plum", "Mrs. Peacock", "Mrs. White"],
  weapons: ["candlestick", "knife", "lead pipe", "revolver", "rope", "wrench"],
  rooms: ["kitchen", "ballroom", "conservatory", "dining room", "cellar", "billard room", "library", "lounge", "hall", "study"],
  confidential: []
}

// print out characters
clueGame.characters.forEach(character => {
  console.log(character);
})

// print out the keys in the clueGame object
for (let key in clueGame){
  console.log(key)
}

const game = {
  "suspects": [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}

// loop throug all the properties of the suspect objects in the suspects array and mark which one I think is guilty

game["suspects"].forEach((suspect, index) => {
  if (game["suspects"][index].name === "Rusty"){
    game["suspects"][index].isGuilty = true
  } else {
    game["suspects"][index].isGuilty = false
  }
})

// Assign variable names to suspects
const suspects = game["suspects"]
const [suspect1, suspect2] = suspects
console.log(suspect1) // { name: 'Rusty', color: 'orange', isGuilty: true }
console.log(suspect2) // { name: 'Miss Scarlet', color: 'red', isGuilty: false }

// Assign variable names to colors
// Alternative - const [color1, color2] = [suspects[0].color, suspects[1].color]
const [{color: color1}, {color: color2}] = suspects
console.log(color1) // orange
console.log(color2) // red
