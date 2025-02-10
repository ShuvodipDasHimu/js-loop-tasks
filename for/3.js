let sumOdd = 0;
for(let i = 91;i<=129;i++){
  if(i % 2 === 1 ){
    sumOdd = sumOdd + i;
    console.log(i);
  }
}
console.log("Sum of Odd Numbers is", sumOdd);


let sumEven = 0;
for(let i = 91;i<=129;i++){
  if(i % 2 === 0 ){
    sumEven = sumEven + i;
    console.log(i);
  }
}
console.log("Sum of Odd Numbers is", sumEven);