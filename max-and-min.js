'use strict';
function max(numbers) {
  let num = 1;
  let maxNum = numbers[0];
  while(num<numbers.length) {
    if(numbers[num]>maxNum){
      maxNum = numbers[num];
    }
  }
  return maxNum;
}
console.log(max[1,2,3,4,5]);

function min(numbers) {
  let num = 1;
  let minNum = numbers[0];
  while(num>numbers.length) {
    if(numbers[num]<minNum){
      minNum = numbers[num];
    }
  }
  return minNum;
}
console.log(min[1,2,3,4,5]);



function average(nums) {
  let sum = 0; nums.forEach(element => {
    sum += element; 
  });

  return sum / nums.length; 
} 
console.log(average([1,1,1,1,1,1]));


// HIGH LEVEL FUNCTIONS

function repeat(fn, num) {
  for (let x = 0; x < num; x++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);



// Functions as arguments (filter)
function filter(arr, fn) {
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (fn(arr[i]) === true) result.push(arr[i]);
  }
  return result;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, name => name[0] === 'R');
console.log(filteredNames);


// Hazard Alert

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);

  };
}

const rocks = hazardWarningCreator('rocks on the road');
const flying = hazardWarningCreator('flying monsters');
rocks('Denmark');
rocks('Everywhere');
flying('Your room');


// TURTLE

const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtleMovements.filter(item => (item[0] < 0 || item[1] < 0 ? false : true));

let newMoves = turtleMovements
  .filter(item => (item[0] < 0 || item[1] < 0 ? false : true))
  .map(item => item[0] + item[1]);

newMoves.forEach((el, i) => {
  console.log(`Movement #${i}: ${el} ${el > 1 || el == 0 ? "steps" : "step"}`);
});

// REDUCE REUSE RECYCLE

let arr = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const message = arr.split(' ').reduce((acc, val) => {
  if (val.length === 3) {
    return acc + ' ';
  } else { 
    return acc + val[val.length-1].toUpperCase();
  }
}, "");

console.log(message);





//Setup
var contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin']
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['JavaScript', 'Gaming', 'Foxes']
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for(let i=0;i<contacts.length;i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property';
    } 
  }
  return 'No such contact';
// Only change code above this line
}

// Change these values to test your function
let data = lookUpProfile('Kristian', 'Vos');
console.log(data);