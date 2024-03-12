var person = {
    name: "John",                
    lastName: "Doe",
    age: 35,                     
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],
    significantOther: person2   
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

// Update John Doe's fourth lucky number to 33
person.luckyNumbers[3] = 33;

// Creating Jimmy Doe and adding him to the family
var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

var family = {
    lastName: "Doe",
    members: [person, person2, person3]   // Now including Jimmy
};

function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0;

  for (let i = 0; i < anArray.length; i++) {
      let member = anArray[i];
      for (let j = 0; j < member.luckyNumbers.length; j++) {
          sumOfAllLuckyNumbers += member.luckyNumbers[j];
      }
  }
  
  return sumOfAllLuckyNumbers;
}

// Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));