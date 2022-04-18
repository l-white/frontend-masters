// 1. Create an object that looks like this: { name: "Rusty", room: "kitchen, weapon: "candlestick" }
const confidential = {
  "name": "Rusty",
  "room": "kitchen",
  "weapon": "candlestick"
}

// 2. Extract out the weapon and location using destructuring
let { weapon, room } = { "weapon": "candlestick", "room": "kitchen" }

console.log(confidential)
console.log(weapon)
console.log(room)