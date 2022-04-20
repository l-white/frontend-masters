// Use _.map() to create an array of broken weapons

const weapons = ["candlestick", "lead pipe", "revolver"];

const weaponsObj = {
    weapon1: "candlestick",
    weapon2: "lead pipe",
    weapon3: "revolver"
}

const makeBroken = function(item){
    return `broken ${item}`
}

const broken = weapons.map((item, index, weapons) => `${makeBroken(item)}`);
console.log(broken);


const newList = [];

function map(list, callback) {
    for (let i = 0; i < list.length; i++) {
        newList.push(callback(list[i]))
    }
    return newList;
}

console.log(map(weapons, makeBroken));
