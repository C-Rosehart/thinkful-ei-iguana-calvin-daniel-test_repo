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
console.log(max[1,2,3,4,5])

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
console.log(min[1,2,3,4,5])



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
repeat(goodbye, 5)