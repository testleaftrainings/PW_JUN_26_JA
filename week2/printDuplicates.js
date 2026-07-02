// REQUIREMENT: FIND DUPLICATES IN AN ARRAY
// input -->[1, 2, 3, 2, 4, 5, 1]
// output-->[1,2]
// solution :
let arr=[1,2,3,2,4,2,5,1,2,1]
// step 1 : identify the duplicate values
// map vs filter --> // map [1,2,3] index 2 --> [] index 2
// filter [1,2,3] -->(condition)--> o/p(true/false) -->[]
let dupValue =arr.filter((item,index)=>{ return arr.indexOf(item) !== index})
// L.H.S[Value] !== R.H.S[Index]
// 0 !==0 --> false
// 1 !==1 --> false
// 2 !==2 --> false
// 0 !==3 --> true
console.log(dupValue)
// step 2 : Identify the unique value
const removingDuplicates =[...new Set(dupValue)]
console.log(removingDuplicates)

////////////////////////////////////////////////////////////////////////

// REQUIREMENT: EXPLAIN JAVASCRIPT CONSOLE.LOG EXECUTION ORDER
// (Code snippet to be provided)

console.log('Start');
const promise1 = new Promise((resolve) => {
  console.log('Inside Promise 1');
  resolve('Resolved 1');
});
promise1.then((res) => console.log(res));
console.log('End');