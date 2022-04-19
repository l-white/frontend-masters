function createSuspectObjects(name){
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {
      console.log("my name is ", name);
    }
  }
};

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

var suspectsList = [];

for (var i = 0; i < suspects.length; i++){
  suspectsList.push(createSuspectObjects(suspects[i]));
}

/*
_.each(suspects, function(name) {
  let suspectObj = createSuspectObjects(name);
  suspectsList.push(suspectObj);
})
*/