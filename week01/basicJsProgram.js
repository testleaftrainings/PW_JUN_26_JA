// difference primitive dataypes in js 
// different variable declaration strategy
// control statements - condition , iteration , jump 
// operators - unary -> typeof , binary --> *,+,-,/,%
// String --> helpers function example : toUpperCase(), charAt()
// function

// 1. Write that reverse the charsequence input : playwright output : thgirwyalp
function reverseTheWord(input){
//let input = "playwright"// 10
let output=""
// iteration statement 
// index based low -> high 
// condition 
// incremental or decremental
for(let i =input.length-1;i>=0; i--){
    output=output+input.charAt(i)
}
 console.log(output)
}
reverseTheWord("bhuvanesh")
reverseTheWord("testleaf")
reverseTheWord("09865")

// 2. what is the differnece between == and ===
// 3. Describe about the immutability of the string with the practical example?
let str="test" // memory a --> test , still memory --> under garbage collector
str = str+"leaf" // new memory b --> create
console.log(str) // test or testleaf

let a="hello"
let b=a
a= a+" world"
console.log(a);
console.log(b);

// 4. 'Order id : 432836 is confirmed'
let confirmationMsg='Order id : 432836 is confirmed'
console.log(confirmationMsg.replaceAll(/\D/g,"")) //regex--->/\D/g [represent's non digits]
//split(" ")--> [0],[1],[2]

// 5. truthy and falsy ?
function checkTruty(data){
    if(data){// truty
      return true
    }else{
        return false
    }
}
console.log(checkTruty("bhuvanesh"))//truty
console.log(checkTruty(10))// true or false
console.log(checkTruty(null))
console.log(checkTruty(""))
console.log(checkTruty())
console.log(checkTruty(false)) //falsy : 0,"",null,undefined,false

// 6. Write the program that print  the first 5 series in the fibonoci 
// input : 5 output : 0,1,1,2,3
function printFibonacci(series){
    let firstDigit =0, secondDigit=1,temp
    let output=""
    for(let i=1; i<=5;i++){
         output= output+firstDigit
          if (i < series) {
            output += ",";
        }
       temp=firstDigit+secondDigit
       firstDigit=secondDigit
       secondDigit=temp
    }
 return output
}
console.log(printFibonacci(5))
// array --> non primitive --> helper function--> week 2