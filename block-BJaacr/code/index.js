/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses);

{
      name: "Starks",
      people: [
        {
          name: "Eddard Stark",
          description:
            "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark",
        },
        {
          name: "Benjen Stark",
          description:
            "Brother of Eddard Stark - First ranger of the Night's Watch",
        },
        {
          name: "Robb Stark",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Grey Wind",
        },
        {
          name: "Sansa Stark",
          description:
            "Daughter of Eddard and Catelyn Stark - Direwolf: Lady",
        },
        {
          name: "Arya Stark",
          description:
            "Daughter of Eddard and Catelyn Stark - Direwolf: Nymeria",
        },
        {
          name: "Brandon Stark",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Summer",
        },
        {
          name: "Rickon Stark Upper",
          description:
            "Son of Eddard and Catelyn Stark - Direwolf: Shaggydog",
        },
        {
          name: "Jon Snow",
          description:
            "Bastard son of Eddard Stark - Steweard in the Night's Watch - Direwolf: Ghost",
        },
      ],
    },
// 2. Log the length of the "houses" key
console.log(got.houses.length);
// 3. Log the name of all houses in got one by one
for(let house of houses) {
  console.log(house.name)
}
// 4. Log the name of all the people in house Starks (index 0) one by one
for(let person of got.houses[0].people) {
    console.log(person.name);
}
// 5. Log the name of all the people in house Lannisters (index 1) one by one
for(let person of got.houses[1].people) {
    console.log(person.name);
}

// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
for(let person of got.houses[1].people) {
    console.log(person.name, person.description);
}
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for(let person of got.houses[0].people) {
    console.log(person.name, person.description);
}
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for(let person of got.houses[0].people) {
  if(person.name === "Robb Stark"){
      console.log(person.name, person.description);
  }
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

// 11. Push the name of the houses in an array named `houseNames` and Log the array
let houseNames =[];
for(let house of got.houses) {
  houseNames.push(house.name);
  console.log(houseNames);
}
  
// 12. Log the size of people in Starks house
 console.log(got.houses[0].people.length);
// 13. Log the size of people in Lannisters house

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
let houseInfo = {};

for(let house of got.houses) {
  houseInfo[house.name] = house.people.length;   //Starks: 4
}
// 15. Log the name of all the people of all the houses in got one by one
for(let house of got.houses) {
  for(let people of house.people) {
    console.log(people.name);
  }
}
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople = [];

for(let house of got.houses) {
  for(let people of house.people) {
  allPeople.push(people.name);
  }
}
// 17. Log the value and length of `allPeople` array created above
console.log(allPeople, allPeople.length);
// 18. Push all descriptions into an array named `allDescription`
let allDescription =[];
for (let house of got.house) {
  for(let people of house.people){
  allDescription.push(people.description);
  }
}
// 19. Log the value and length `allDescription`

console.log(allDescription, allDescription.length);

// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
for(let house of got.house)
    for(let people of house.people){
        if (people.description.length > 30) {
          log(people.description);
        }
    }
}


//or


for( let description of allDescription) {
  
   if (description.length > 30) {
     console.log(description);
   }
}

