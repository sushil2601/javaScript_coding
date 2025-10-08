/**
 * 
 * Array
 * 
 */

// // Q.1) Find Rank 

// const arr = [1,2,3,4,5,6,7,8]

// //i/p :- 3,7
// //o/p :- [1,2,4,5,6,7,3,8]

// //i/p :- 7,3
// //o/p :- [1,2,7,3,4,5,6,8]

// function findRank(arr,n1,n2){

//     const arr2 = [...arr];
//     console.log(arr2)
//     const fromIndex = n1-1
//     const toIndex = n2-1

//     const [moved] = arr2.splice(fromIndex,1)

//     if(fromIndex<toIndex){
//         arr2.splice(toIndex,0,moved)
//     }else{
//         arr2.splice(toIndex,0,moved)
//     }

//     return arr2

// }

// // console.log(findRank(arr,3,7))
// console.log(findRank(arr,7,3))

//Q.2) swap element in array

// const arr = [1,2,3,4,5,6,7,8]

// function swapElement(arr,n1,n2){

//     const arr2 = [...arr]

//     console.log(arr2)

//     const fromIndex = n1-1;
//     const toIndex = n2-1;

//     let temp = arr2[fromIndex]
//     arr2[fromIndex] = arr2[toIndex]
//     arr2[toIndex] = temp


//     //without using temp variable

//     // [arr2[fromIndex],arr2[toIndex]] = [arr2[toIndex],arr2[fromIndex]]

//     return arr2;

// }

// console.log(swapElement(arr,3,7))
// console.log(swapElement(arr,4,8))

//Q.3) find index of element

// const arr = [10,20,30,40,50,60]

// function findIndex(arr,target){

//     let index = -1

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             index = i
//         }
//     }

//     return index;
// }

// console.log(findIndex(arr,50))

//Q.4) 

// // I/P = [10,20,22,10,20,27,35,15,35]
// // O/P = [10,20,35]

// const arr = [10,20,22,10,20,27,10,35,15,35]

// function findRepeatedNumber(arr){

//     let result = [];
//     let finalResult = [];

//     //Method 1
//     // for(let i=0;i<arr.length;i++){
//     //     if(!result.includes(arr[i])){
//     //         result.push(arr[i])
//     //     }else{
//     //         finalResult.push(arr[i])
//     //     }
//     // }

//     // const uniElement = [...new Set(finalResult)]

//     // return uniElement

//     //Method 2

//     // arr.filter((ele)=>{
//     //     if(!result.includes(ele)){
//     //         result.push(ele)
//     //     }else{
//     //         finalResult.push(ele)
//     //     }
//     // })

//     // const uniqueEle = [...new Set(finalResult)]

//     // return uniqueEle

//     //Method 3

//     let count = {};

//     //forEach and filter both works here
//     arr.filter(element => {
//         if(count[element]){
//             count[element] = count[element] + 1
//         }else{
//             count[element] = 1
//         }
//     });

//     for(let ele in count){
//         console.log(`${ele} - ${count[ele]}`)
//     }

//     // return count;

//     // for(let ele of arr){
//     //     count[ele] = (count[ele] || 0) + 1
//     // }

//     // let uniqueEle = [];

//     // for(let ele in count){
//     //     if(count[ele]>1){
//     //         uniqueEle.push(ele)
//     //     }
//     // }

//     // return {count,uniqueEle}
// }

// findRepeatedNumber(arr)

// // console.log(findRepeatedNumber(arr))

// Q.5 Flatten Array

// const arr = [1,2,[3,4,[5,6,7]],8,9,[10,[11]],[[12]]]

// function flattenArray(arr){

//     let result = [];

//     //Method 1
//     // function rec(x){
//     //     for(let ele of x){
//     //         if(Array.isArray(ele)){
//     //             rec(ele)
//     //         }else{
//     //             result.push(ele)
//     //         }
//     //     }
//     // }
//     // rec(arr)

//     //Method 2
//     // for(let item of arr){
//     //     if(Array.isArray(item)){
//     //         result.push(...flattenArray(item))
//     //     }else{
//     //         result.push(item)
//     //     }
//     // }

//     //Method 3
//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             result = result.concat(flattenArray(item));
//         } else {
//             result = result.concat(item);
//         }
//     }

//     return result;
// }

// console.log(flattenArray(arr))

// const nested = [1,2,[3,4,[5,6,7]],8,9,[10,[11]],[[12]]]

// const flat = [].concat(...nested)

// console.log(flat)

// const flat_again = [].concat(...flat)

// console.log(flat_again)

// Q.6 Merge two array & concatenate two array

/*

    Merge :-       Combine arrays, possibly with logic (dedupe, etc.)
    Concatebate :- Join arrays end-to-end

*/
// const arr1 = [1,2,3,4]
// const arr2 = [3,4,5,6]

// function mergeTwoArray(arr1,arr2){

    //C-1
    // const mergeArray = [...arr1,...arr2]
    // return mergeArray;

    //C-2
    // const concatArray = arr1.concat(arr2)
    // return concatArray

    //C-3
    // let concatArray = [];

    // for(let i=0;i<arr1.length;i++){
    //     concatArray.push(arr1[i])
    // }

    // for(let j=0;j<arr2.length;j++){
    //     concatArray.push(arr2[j])
    // }

    // return concatArray

    //M-1

    // const mergedArray = [... new Set([...arr1,...arr2])]
    // return mergedArray

    //M-2

// }

// console.log(mergeTwoArray(arr1,arr2))

// Q.7 union and intersection 

// /*
//     union        :- All unique element from both
//     intersection :- only common element from both
// */

// const arr1 = [1,2,3,4,5,6]
// const arr2 = [4,5,6,7,8,9]

// // function unionOfArray(arr1,arr2){

// //     // let result = [];

// //     //M-1    
// //     // for(let i=0;i<arr1.length;i++){
// //     //    result.push(arr1[i])
// //     // }

// //     // for(let j=0;j<arr2.length;j++){
// //     //     result.push(arr2[j])
// //     // }

// //     // const finalResult = [...new Set(result)]

// //     // return finalResult

// //     //M-2

// //     // const result = [...new Set([...arr1,...arr2])]
// //     // return result

// //     //M-3

// //     // const arr3 = arr1.concat(arr2.filter(x=> !arr1.includes(x)))
// //     // return arr3

//  //M-4
//     // const result = [...arr1,...arr2]
//     // const finalResult = []

//     // for(let i=0;i<result.length;i++){
//     //     if(!finalResult.includes(result[i])){
//     //         finalResult.push(result[i])
//     //     }
//     // }

//     // return finalResult


// // }

// // console.log(unionOfArray(arr1,arr2))

// function intersectionOfArray(aar1,arr2){

//     // const result1 = []
//     // const result2 = []

//     // const combine = [...aar1,...arr2]

//     //M-1

//     // for(let i=0;i<combine.length;i++){
//     //     if(!result1.includes(combine[i])){
//     //         result1.push(combine[i])
//     //     }else{
//     //         result2.push(combine[i])
//     //     }
//     // }

//     // return result2

//     //M-2

//     // combine.filter((ele)=>{
//     //     if(!result1.includes(ele)){
//     //         result1.push(ele)
//     //     }else{
//     //         result2.push(ele)
//     //     }
//     // })

//     // return result2

//     //M-3
//     const result = arr1.filter((item)=>arr2.includes(item))
//     return result
// }

// console.log(intersectionOfArray(arr1,arr2))

// Q.8  arrange -ve and +ve number

// const arr = [1,2,-1,3,-2,4,6,-5,8,-4,-3,7,10,-6,-8]

// function arrPosNeg(arr){

//     const pos = [];
//     const neg = [];

    //M-1
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]<0){
    //         neg.push(arr[i])
    //     }else{
    //         pos.push(arr[i])
    //     }
    // }

    // const result = [...pos,...neg]

    // // return {pos,neg}
    // return result

    //M-2

//     arr.filter((ele)=>{
//         if(ele<0){
//             neg.push(ele)
//         }else{
//             pos.push(ele)
//         }
//     })

//     const result = [...pos,...neg]
//     return result
// }

// console.log(arrPosNeg(arr))

//Alternate positive and negative number
// M-1
// function alternatePosNeg(arr){

//     const result = [];
//     const pos = [];
//     const neg = [];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             pos.push(arr[i])
//         }

//         if(arr[i]<0){
//             neg.push(arr[i])
//         }
//     }

//     const maxLength = Math.max(pos.length,neg.length)

//     for(let i=0;i<maxLength;i++){
//         if(i<pos.length){
//             result.push(pos[i])
//         }

//         if(i<neg.length){
//             result.push(neg[i])
//         }
//     }

//     // return {pos,neg}
//     return result;


// }
// console.log(alternatePosNeg(arr))

//M-2

// function altPosNeg(arr){

//     const { pos, neg } = arr.reduce((acc, curVal) => {
//         if (curVal > 0) {
//             acc.pos.push(curVal);
//         } else if (curVal < 0) {
//             acc.neg.push(curVal);
//         }
//         return acc; // important: return the accumulator
//     }, { pos: [], neg: [] });

//     console.log({ pos, neg });

//     return pos.reduce((acc, cur, i) => {
//         acc.push(cur);
//         if (i < neg.length) acc.push(neg[i]);
//         return acc;
//     }, []);


// }

// console.log(altPosNeg(arr))

// Q.9 move all zeros in an array to the end.

// const arr = [1,0,2,3,0,4,2,5,0,0,0,6,7,8]

// function moveAllZeroToEnd(arr){

//     const non_zero = [];
//     const zero = [];

//     //M-1
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             zero.push(arr[i])
//         }else{
//             non_zero.push(arr[i])
//         }
//     }

//     const result = [...non_zero,...zero]

//     return result

//     //M-2

//     arr.filter((ele)=>{
//         if(ele===0){
//             zero.push(ele)
//         }else{
//             non_zero.push(ele)
//         }
//     })

//     //const result = [...non_zero,zero]  //[ 1, 2, 3, 4, 2, 5, 6, 7, 8, [ 0, 0, 0, 0, 0 ] ]
//     const result = [...non_zero,...zero]
//     return result

//     //M-3

//     const {non_zero,zero} = arr.reduce((acc,cur)=>{
//         if(cur === 0){
//             acc.zero.push(cur)
//         }else{
//             acc.non_zero.push(cur)
//         }
//         return acc
//     },{non_zero :[],zero:[]})

//     const result = [...non_zero,...zero]
//     return result
// }

// console.log(moveAllZeroToEnd(arr))

// const arr = [1,0,2,3,0,4,2,5,0,0,0,6,7,8]

// function altZeroandNumber(arr){

//     //M-1

//     const zero = [];
//     const non_zero = [];
//     const result = [];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 0){
//             zero.push(arr[i])
//         }else{
//             non_zero.push(arr[i])
//         }
//     }

//     for(let j=0;j<Math.max(zero.length,non_zero.length);j++){
//         if(j<non_zero.length){
//             result.push(non_zero[j])
//         }

//         if(j<zero.length){
//             result.push(zero[j])
//         }
//     }

//     return result;

//     //M-2

//     arr.filter((ele)=>{
//         if(ele === 0){
//             zero.push(ele)
//         }else{
//             non_zero.push(ele)
//         }
//     })

//    return non_zero.reduce((acc,cur,i)=>{
//         acc.push(cur)
//         if(i<zero.length){
//             acc.push(zero[i])
//         }

//         return acc
//    },[])
// }

// console.log(altZeroandNumber(arr))

//Q.10 Given an array of integers, return the two numbers that add upto a target(two-sub problem)

// const arr = [1,2,3,4,5,6,7,8,9];

// //target : 9 
// //o/p  : [1,8],[2,7],[3,6],[4,5]

// function targetTwoNub(arr,target){

//     for(let  i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j] === target){
//                 return [arr[i],arr[j]]
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(targetTwoNub(arr,9))

// function returnAllPair(arr,target){

//     let result = [];

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 result.push([arr[i],arr[j]])
//             }
//         }
//     }

//     return result

// }

// console.log(returnAllPair(arr,9))

//Q.11 find the first non-repeating elements in array

// const arr = [1,2,3,4,1,5,2,3,10,8,9,10,11]

// function firstNonRepeat(arr){

//     let freq = {}; 

//     for(let item of arr){
//         freq[item] = (freq[item] || 0) +1
//     }

//     let result  = [];

//     for(let num in freq){
//         if(freq[num] === 1){
//             // return num    //first non-repeating number
//             result.push(num) //All non-repeating number
//         }
        
//     }

//     return result

// }

// console.log(firstNonRepeat(arr))

//Q. find the first repeating elements in array.

// const arr = [1,2,3,4,2,1,5,2,3,10,8,9,10,11]

// function firstRepeatNum(arr){

//     let seen = new Set();

//     for(let item of arr){
//         if(seen.has(item)){
//             return item
//         }
//         seen.add(item)
//     }
//     return null;
// }

// console.log(firstRepeatNum(arr))

//Q find missing number.

// const arr = [1,3,5,9,11]

// function missingNumber(arr){

//     const sum1 = arr.reduce((acc,curVal)=>{
//         return acc = acc+curVal;
//     },0)

//     let min = Math.min(...arr)
//     let max = Math.max(...arr)

//     let sum2 =0;

//     for(let i=min;i<=max;i++){
//         if(i%2 !==0){
//             sum2 = sum2+i
//         }
//     }

//     const result = sum2-sum1
//     return result

// }

// console.log(missingNumber(arr))

//Q. find missing number from a range.

// const arr = [1,2,4,6]

// function missingFromRange(arr){

//     let result = [];

//     let min = Math.min(...arr)
//     let max = Math.max(...arr)

//     for(let i=min;i<=max;i++){
//         if(!arr.includes(i)){
//             result.push(i)
//         }
//     }
//     return result;

// }

// console.log(missingFromRange(arr))

// const arr = [1,3,7,11,15,17,21]
// const arr1 = [2,6,10,12,16,18,22]

// function findMissingFromRange(arr1){

//     let result = [];

//     let min = Math.min(...arr1)
//     let max = Math.max(...arr1)

//     for(let i=min;i<=max;i++){
//         if(i%2 ===0 && !arr1.includes(i)){
//             result.push(i)
//         }
//     }

//     return result
// }

// console.log(findMissingFromRange(arr1))

//Q. find Nth largest number

// const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

// function findNthLargestNum(arr,n){

//     const sortedArr = arr.sort((a,b)=>b-a)

//     console.log(sortedArr)

//     return sortedArr[n-1]
// }

// console.log(findNthLargestNum(arr,3))

// Find 2nd largest number and remove 1st largest number.

// function find(arr,n){

//     const arr2 = arr.sort((a,b)=>b-a);

//     const arr3 = [...arr2]

//     const result1 = arr3.splice(0,1)
//     const result2 = arr2[n-1]

//     return {firLargest : result1,secLargest : result2,arr3}
// }

// console.log(find(arr,2))

//find second smallest number

// function NthSmallestNum(arr,n){

//     const sortedArr = arr.sort((a,b)=>a-b)

//     console.log(sortedArr)

//     return sortedArr[n-1]
// }

// console.log(NthSmallestNum(arr,2))

//find first three largest number

// function firstThreeLargest(arr,n){

//     const sortedArr = arr.sort((a,b)=>b-a)

//     return sortedArr.slice(0,n)

// }

// console.log(firstThreeLargest(arr,3))

//Q. Remove duplicates without using set method.

// const arr = [1,2,1,3,4,2,4,7,5,9,10,15,11,12,20,1,2,4,3,0,0,0,7,5,9]

// function removeDuplicate(arr){

//     const newArr = [...new Set(arr)].sort((a,b)=>a-b)

//     console.log(newArr)

//     const result = [];

//     for(let ele of arr){
//         if(!result.includes(ele)){
//             result.push(ele)
//         }
//     }

//     return result.sort((a,b)=>a-b)

// }

// console.log(removeDuplicate(arr))

//Q. Reverse an array without using reverse 

// const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

// function reverseArr(arr){

//     const result = [];

//     for(let i=arr.length-1;i>=0;i--){
//         result.push(arr[i])
//     }

//     return result;

// }

// console.log(reverseArr(arr))

//Q. In place reverse
// const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

// console.log(arr)

// function reverseInPlace(arr){

//     let j = arr.length-1

//     for(let i=0;i<j;i++,j--){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }

//     return arr;
// }

// console.log(reverseInPlace(arr))

//Q.find avg. of array
    // const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

    // function avgOfNum(arr){

    //     const sum = arr.reduce((acc,curVal)=>{
    //         return acc = acc+curVal;
    //     },0)

    //     const avg = sum/arr.length

    //     return avg;

    // }

    // console.log(avgOfNum(arr))

//Q.Split [1,2,3,4,5] into [[1,2],[3,4],[5]]

// const arr = [1,2,3,4,5];

// function splitArr(arr){

//     let result = [];

//     for(let i=0;i<arr.length;i+=2){
//         if(i+1<arr.length){
//             result.push([arr[i],arr[i+1]])
//         }else{
//             result.push([arr[i]])
//         }
//     }

//     return result;
// }

// console.log(splitArr(arr))

// const arr = [1,2,3,4,5,6,7,8,9,10,11]

// function splitArr(arr,chunkSize){

//     let result = [];

//     for(let i=0;i<arr.length;i+=chunkSize){
//         result.push(arr.slice(i,i+chunkSize))
//     }

//     return result;
// }

// console.log(splitArr(arr,2))


//Q. Currying fn for infinite sum

// function sum(x){
//     let acc = x??0;

//     function inner(y){
//         if(y===undefined) return acc;
//         acc+=y
//         return inner
//     }
//     return inner

// }

// console.log(sum(10)(20)(30)(40)())

//Q.Remove falsy value

// const arr = [0,null,undefined,'',5]

// function removeFalsy(arr){

//     const result = arr.filter(val=>val)
//     return result

//     const result = [];

//     arr.reduce((acc,val)=>{
//         if(val){
//             result.push(val)
//         }
//     })

//     return result

// }

// console.log(removeFalsy(arr))

//Q. Factorial of a number

// function factorial(n){

//     if(n===0) return 1;

//     let fact = 1;

//     let result = [];

//     for(let i=1;i<=n;i++){
//         result.push(fact*=i)
//     }
//     return result
// }

// console.log(factorial(5))

// function fact(n){

//     let fact = 1;

//     if(n===0) return 1

//     for(let i=1;i<=5;i++){
//         fact = fact*i
//     }

//     return fact;

// }
// console.log(fact(0))

// function facto(n){

//     if(n===0) return console.log(`factorial of ${n} is 1`)

//     let fact = 1;

//     for(let i=1;i<=n;i++){
//         console.log(`factorial of ${i} is ${fact=fact*i}`)
//     }

// }

// facto(5)

// // console.log(facto(0))

// function fact(n){

//     if(n===0) return 1;
//     return n*fact(n-1)

// }
// console.log(fact(5))

//Q. Fibonacci series

// function fib(n){
//     if(n<2) return n;
//     return fib(n-1) + fib(n-2)
// }

// function printFib(n){
//     const result = [];
//     for(let i=0;i<n;i++){
//         // console.log(fib(i))
//         result.push(fib(i))
//     }

//     return result
// }

// console.log(printFib(5))

// function fib(n){
//     const result = [];

//     let a=0,b=1;

//     for(let i=0;i<n;i++){
//         result.push(a);
//         [a,b] = [b,a+b]
//     }

//     return result
// }

// console.log(fib(5))

//Q.find all prime number in an array.

// function primeNumInArr(arr){

//     return arr.filter((num)=>{
//         if(num<=1) return false;
//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num%i === 0) return false
//         }
//         return true
//     })

// }

// console.log(primeNumInArr([1,2,20,22,10,30,27,35,19,85]))

//Q.Print all prime numbers in a given range.

// function isPrime(num){

//     if(num<=1) return false
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0) return false
//     }
//     return true
// }

// function getPrime(start,end){
//     const primes = [];

//     for(let i=start;i<=end;i++){
//         if(isPrime(i)){
//             primes.push(i)
//         }
//     }

//     return primes;
// }

// console.log(getPrime(1,25))

//Q.Find All Prime Numbers up to Nth.

// function isPrime(num){
//     if(num<=1) return false

//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0) return false
//     }
//     return true
// }

// function getPrime(n){
//     let result = [];

//     for(let i=2;i<=n;i++){
//         if(isPrime(i)){
//             result.push(i)
//         }
//     }

//     return result
// }

// console.log(getPrime(50))

//Q.Find the sum of first 'N' natural numbers.

// function sumOfNatural(n){
//     return (n*(n+1))/2
// }

// console.log(sumOfNatural(10))

// function sum(n){

//     let sum = 0;

//     for(let i=1;i<=n;i++){
//         sum = sum+i
//     }
//     return sum;
// }

// console.log(sum(10))

// function sumNatural(n){
//     if(n===0) return 0
//     return n+sumNatural(n-1)
// }

// console.log(sumNatural(10))

//Q.Polyfill of bind

// function printName(city1,city2){
//     console.log(`${this.firstName} ${this.lastName} lives in ${city1} and ${city2}`)
// }

// const person = {
//     firstName : 'sushil',
//     lastName : 'suman'
// }

// Function.prototype.myBind = function(obj,...args1){
//     let myFun = this

//     return function(...args2){
//         return myFun.apply(obj,[...args1,...args2])
//     }
// }

// const result = printName.myBind(person,'Noida')
// result('Gurgaon');

//Q. convert numbers in roman number.

// function convertToRoman(num){

//     const roman = {C:100,XC:90,L:50,XL:40,IX:9,V:5,IV:4,I:1}

//     let result = ''

//     for(let key in roman){
//         while(num>=roman[key]){
//             result+=key
//             num-=roman[key]
//         }
//     }

//     return result
// }

// console.log(convertToRoman(8))

//Q. Merge array of object by id.

// const array1=[{id:1, x:5, y:7},{id:2, x:5, y:7},{id:3,x:5, y:7}];
// const array2=[{id:3, x:9, y:11},{id:4,x:5, y:7},{id:5,x:5, y:7}];

// let mergedArray = [...array1,...array2].reduce((acc,obj)=>{
//     let existing = acc.find(item => item.id === obj.id)

//     if(existing){
//         existing.x = Math.max(existing.x,obj.x)
//         existing.y = Math.max(existing.y,obj.y)
//     }else{
//         acc.push(obj)
//     }
//     return acc
// },[])

// console.log(mergedArray)

//Q. create counter function

// function Y(){
//     let count = 0

//     function X(){
//         count+=1
//         console.log(count)
//     }
//     return X
// }

// const counter = Y();
// counter()
// counter()
// counter();

//Q. create increment,decremnet counter in one function.

// function counter(){
//     let count = 0;

//     return{
//         increment : function(){
//             count = count+1
//         },
//         decrement : function(){
//             count = count-1
//         },
//         print : function(){
//             console.log(count)
//         }
//     }
// }

// const result = counter();
// result.increment()
// result.increment()
// result.decrement()
// result.print()

//Q. Print the name of students below the avg marks.
// const students = [
//   { id: 1, name: "Sushil", marks: 85 },
//   { id: 2, name: "Amit", marks: 92 },
//   { id: 3, name: "Priya", marks: 76 },
//   { id: 4, name: "Ravi", marks: 65 },
//   { id: 5, name: "Neha", marks: 88 },
//   { id: 6, name: "Karan", marks: 55 },
//   { id: 7, name: "Meena", marks: 95 },
//   { id: 8, name: "Arjun", marks: 70 },
//   { id: 9, name: "Rohit", marks: 82 },
//   { id: 10, name: "Simran", marks: 60 }
// ];

// function printName(students){

//     const totalMarks = students.reduce((acc,curVal)=>{
//         return acc = acc+curVal.marks
//     },0)

//     const avgMarks = totalMarks/students.length;
//     console.log(avgMarks)

//     let result = [];

//     students.filter((ele)=>{
//         if(ele.marks<avgMarks){
//             result.push(ele.name,ele.marks)
//         }
//     })

//     return result;


// }

// console.log(printName(students))

//Q. print the employee name,salary having nth largest salary.

// const employees = [
//   { id: 1, name: "Sushil", salary: 50000 },
//   { id: 2, name: "Amit", salary: 60000 },
//   { id: 3, name: "Priya", salary: 75000 },
//   { id: 4, name: "Ravi", salary: 55000 },
//   { id: 5, name: "Neha", salary: 80000 }
// ];

// function printEmployee(employees,n){

//     let result = [];

//     const sortedResult = employees.sort((a,b)=>b.salary-a.salary)

//     const emp = sortedResult[n-1]

//     return {name:emp.name,salary:emp.salary}
// }

// console.log(printEmployee(employees,3))

// function employee(employees,target){

//     let result = [];

//     for(let i=0;i<employees.length;i++){
//         if(employees[i].id===target){
//             result.push(employees[i].name,employees[i].salary)
//         }
//     }

//     return result
// }

// console.log(employee(employees,3))

//Q fibonacci series using memoization

// function createFibonacciFinder(){

//     let cachedResult = {};

//     let initalized = false;

//     function fib(n){

//         if(n<=1) return n;

//         if(cachedResult[n] !== undefined){
//             return cachedResult[n]
//         }

//         const result = fib(n-1) + fib(n-2)

//         cachedResult[n] = result;
//         return result

//     }

//     function printFib(n){
//         let series = [];

//         let cacheHit = initalized && cachedResult[n] !== undefined

//         if(cacheHit){
//             console.log('cached result')
//         }

//         for(let i=0;i<=n;i++){
//             series.push(fib(i))
//         }

//         initalized = true;
//         return series
//     }

//     return printFib
// }

// const result = createFibonacciFinder();
// const firstSeries = result(5)
// console.log(firstSeries)
// const secondSeries = result(5)
// console.log(secondSeries)
// const thirdSeries = result(6)
// console.log(thirdSeries)

//Q. Factorial using closures

// function createFactorialFinder(){
//     const cachedResult = {};

//     let flag = false;

//     function fact(n){
//         if(n===0) return 1

//         if(cachedResult[n] !== undefined){
//             return cachedResult[n]
//         }

//         const result = n*fact(n-1);

//         cachedResult[n] = result

//         return result;
//     }

//     function printFact(n){
//         const series = [];

//         let cacheHit = flag && cachedResult[n] !== undefined

//         if(cacheHit){
//             console.log('cached result')
//         }

//         for(let i=1;i<=n;i++){
//             series.push(fact(i))
//         }
//         flag = true;
//         return series
//     }
//     return printFact;

// }

// const result = createFactorialFinder();

// const fact1 = result(5)
// console.log(fact1)
// const fact2 = result(5)
// console.log(fact2)
// const fact3 = result(6)
// console.log(fact3)

// function createFibonacciFinder(){

//     let cache = {};
//     let series = [0,1];
//     // let series = [];

//     function generateFib(n){

//         for(let i=2;i<n;i++){
//             series[i] = series[i-1] + series[i-2]
//         }
//         return series
//     }
//     generateFib(8)
//     console.log('Series :-',series)

//     function returnedPos(pos){

//         if(cache[pos] !== undefined){
//             console.log(`Return pos from cache for pos ${pos} :- ${cache[pos]}`)
//             return cache[pos]
//         }

//         const result = series[pos]
//         // console.log(`Result for ${pos} :-`,result)
//         cache[pos] = result;
//         // console.log('cached pos:-',cache[pos])
//         console.log(cache)
//         return result
//     }
//     return returnedPos
// }

// const result = createFibonacciFinder();
// const getPos1 = result(6)
// console.log(getPos1)
// result(6)
// const getPos2 = result(9)
// console.log(getPos2)
// result(9)

/*-------------------------------------------------------------------------------------------------------------------*/

/**
 * 
 * String
 * 
 */

//Q.1 Create Hashtag from String

// function createHashTag(str){

//     let result = '#'
//     let words = str.split(' ')

//     for(let i=0;i<words.length;i++){
//         result = result+words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }

//     return result;

// }

// console.log(createHashTag('javascript is awesome'))

//Q.2 convert first letter of string capital

// function toTitlecase(str){

//     let words = str.split(' ');

//     // let result = words.map(word=>word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase());

//     let result = words.map((word)=>{
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//     })

//     return result.join(' ')
// }

// console.log(toTitlecase('hello sushil'))

//Q.3 Reverse string.

// function reverseStr(str){

//     let result = '';

//     for(let i=str.length-1;i>=0;i--){
//         result = result+str[i]
//     }

//     return result;

    //    const result = str.split('').reverse().join('')
    //    return result;

// }

// console.log(reverseStr('hello world'))

// function reverseString(str){

//     let result = str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')

//     return result;
// }

// console.log(reverseString('hello world'))

//Q To find longest word in a sentence.

// const str = 'I love javascript coding';

// function longestWord(str){

//     let words = str.split(' ')
//     let longest = "";

//     for(let i=0;i<words.length;i++){
//         if(words[i].length>longest.length){
//             longest=words[i]
//         }
//     }

//     for(let word of words){
//         if(word.length>longest.length){
//             longest = word
//         }
//     }

//     return longest;

// }

// console.log(longestWord(str))

//Q. To check paalindrone.

// function palindrone(str){

//     let newStr = str.toLowerCase();
//     let reverStr = newStr.split('').reverse().join('')

//     return newStr===reverStr;
// }

// console.log(palindrone('momo'))
// console.log(palindrone("moom"))

//Q. To check anagrams.

// function checkAnagrams(str1,str2){

//     let newStr1 = str1.toLowerCase().split('').reverse().sort().join('')
//     let newStr2 = str2.toLowerCase().split('').reverse().sort().join('')

//     if(newStr1===newStr2) return `Anagrams`
//     return `Anagrams not exit`

// }

// console.log(checkAnagrams('Listen','silent'))

//Q. Count no. of vowels and consonent in a string.

// const str = 'Hello World'

// function countVAndC(str){

//     const vowel = 'AEIOUaeiou';
//     let consCount = 0;
//     let vowCount = 0;
//     // let words = str.split(' ')

//     for(let word of str){
//         if(vowel.includes(word)){
//             vowCount++;
//         }else{
//             consCount++;
//         }
//     }

//     return {vowels : vowCount,consonent :consCount }
// }

// console.log(countVAndC(str))

//Q. Count no. of character

// const str = 'Hello worLd'

// function countNoOfChar(str){


//     let str1 = str.split() //{'Hello worLd' : 1}

//     let newStr = str.split('');

//     let count = {};

//     for(let word of newStr){
//         count[word] = (count[word] || 0) +1
//     }

//     return count;

// }

// console.log(countNoOfChar(str))

//Q.

// let str = "sabyasachi, Techno Exponent Techno I sabyasachi"

// function countWord(str){

//     let words = str.replace(/,/g,'').split(' ')

//     let wordCount = {};

//     words.forEach((word)=>{
//         if(wordCount[word]){
//             wordCount[word]++
//         }else{
//             wordCount[word] = 1
//         }
//     })

//     for(let word in wordCount){
//         console.log(`${word}-${wordCount[word]}`)
//     }
// }
// countWord(str)
// console.log(countWord(str))

// function wordCount(str){

//     let words = str.replace(/,/g,'').split(' ')

//     let count = {};

//     for(let word of words){
//         count[word] = (count[word] || 0) +1
//     }

//     return count
// }

// console.log(wordCount(str))

//Q. To find first non-repeating character

// const str = 'hello hello world'

// function findNonRepeat(str){

//     const words = str.split('')

//     const count = {};

//     for(let word of words){
//         count[word] = (count[word] || 0) +1
//     }

//     for(let char in count){
//         if(count[char] === 1){
//             return char
//         }
//     }
// }

// console.log(findNonRepeat(str))

//Q. To first repeating char

// function findRepeatChar(str){

//     let seen = new Set();

//     for(let char of str){
//         if(seen.has(char)){
//             return char
//         }
//         seen.add(char)
//     }

//     return null
// }

// console.log(findRepeatChar(str))

//Q. To check if string contains unique character.

// function checkStrHasUniChar(str){

//     let seen = new Set();

//     for(let char of str){
//         if(seen.has(char)){
//             return false;
//         }
//         seen.add(char)
//     }
//     return true
// }

// console.log(checkStrHasUniChar("World"))
// console.log(checkStrHasUniChar("Hello"))

//Q. Input :- aaabbcccc , Output : a3b2c4

// function countChar(str){

//     let result = '';
//     let count = 1;

//     for(let i=0;i<str.length;i++){
//         if(str[i] === str[i+1]){
//             count++
//         }else{
//             result = result+str[i]+count;
//             count = 1
//         }
//     }
//     return result;
// }

// console.log(countChar("aaabbcccc"))
// console.log(countChar('aaaaaaaaaaaaa'))
// console.log(countChar('ddfsda111aded223')) // giving wrong output

//Q. Input :- programming ,  Output :- progaming

// function removeRepeatChar(str){

//     let seen = new Set();
//     let result = '';

//     for(let char of str){
//         if(!seen.has(char)){
//             seen.add(char)
//             result+=char
//         }
//     }
//     return result
// }

// console.log(removeRepeatChar("programming"))

/***************************************************************************************************************** */

/**
 * 
 * Object
 * 
 */

//Q.Q.1 Implement a function that uses recursion to compute the sum of all numbers in a nested object. If null, string, or undefined skip the addition process.

//  Input : {a:1,b:{c:2,d:3},e:4}
//  Output : 10
//  Input : {a:1,b:{c:2,d:3},e:{f:"67",g:undefined,h:10}}
//  Output : 16

// const obj =  {a:1,b:{c:2,d:3},e:4}
// const obj1 = {a:1,b:{c:2,d:3},e:{f:"67",g:undefined,h:10}}

// function sumOfObj(obj){

//     let sum = 0;

//     for(let key in obj){
//         let value = obj[key]

//         if(typeof value === "number"){
//             sum = sum + value;
//         }else if(typeof value === "object" && value !== null){
//             sum = sum + sumOfObj(value);
//         }
//     }
//     return sum;
// }

// console.log(sumOfObj(obj))

/**
 * 
 * Pattern
 * 
 */

/**
 * 
 * Promises
 * 
 */

/**
 * 
 * Array of object
 * 
 */
