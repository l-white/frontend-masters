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

const [suspect1, suspect2] = game["suspects"]
console.log(suspect1)
console.log(suspect2)
