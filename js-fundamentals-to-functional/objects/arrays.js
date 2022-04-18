var person = [];

person.name = "Mrs. White";

var who = person.name;

console.log(who)
console.log(person)
console.log(person[0])
console.log(typeof person === "array")
console.log(typeof person === "object")

person[0] = "I was not in the Billards room";
console.log(person);
console.log(person[0])
console.log(person[1]);
console.log(person.name);

var plea = "wouldShe";
person[plea] = "I would never!"
console.log(person[plea]);
console.log(person);
console.log(plea);

person["plea"] = "I would never!";
console.log(person.plea);
console.log(plea);
console.log("wouldShe")
console.log(person.length)
