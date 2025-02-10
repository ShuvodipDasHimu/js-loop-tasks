/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let i = 81;
let sumOdd = 0;
while(i<132){
  if(i % 2 === 1){
    console.log(i);
    sumOdd = sumOdd + i;
  }
  i++;
}
console.log("Sum of all the odd numbers from 81 to 131.", sumOdd);


let n = 206;
let sumEven = 0;
while(n<=311){
  if(n % 2 === 0){
    console.log(n);
    sumEven = sumEven + n;
  }
  n++;
}
  console.log("Sum of all the even numbers from 206 to 311.", sumEven);