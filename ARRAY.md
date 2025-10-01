## Q.1 Find Rank 

const arr = [1,2,3,4,5,6,7,8]

i/p :- 3,7
o/p :- [1,2,4,5,6,7,3,8]

i/p :- 7,3
o/p :- [1,2,7,3,4,5,6,8]

function findRank(arr,n1,n2){

    const arr2 = [...arr];
    console.log(arr2)
    const fromIndex = n1-1
    const toIndex = n2-1

    const [moved] = arr2.splice(fromIndex,1)

    if(fromIndex<toIndex){
        arr2.splice(toIndex,0,moved)
    }else{
        arr2.splice(toIndex,0,moved)
    }

    return arr2

}

console.log(findRank(arr,3,7))
console.log(findRank(arr,7,3))

## Q.2 swap element in array

const arr = [1,2,3,4,5,6,7,8]

function swapElement(arr,n1,n2){

    const arr2 = [...arr]

    console.log(arr2)

    const fromIndex = n1-1;
    const toIndex = n2-1;

    let temp = arr2[fromIndex]
    arr2[fromIndex] = arr2[toIndex]
    arr2[toIndex] = temp


    without using temp variable

    [arr2[fromIndex],arr2[toIndex]] = [arr2[toIndex],arr2[fromIndex]]

    return arr2;

}

console.log(swapElement(arr,3,7))
console.log(swapElement(arr,4,8))

## Q.3 find index of element

const arr = [10,20,30,40,50,60]

function findIndex(arr,target){

    let index = -1

    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            index = i
        }
    }

    return index;
}

console.log(findIndex(arr,50))

## Q.4 

I/P = [10,20,22,10,20,27,35,15,35]
O/P = [10,20,35]

const arr = [10,20,22,10,20,27,10,35,15,35]

function findRepeatedNumber(arr){

    let result = [];
    let finalResult = [];

    Method 1
    for(let i=0;i<arr.length;i++){
         if(!result.includes(arr[i])){
             result.push(arr[i])
         }else{
             finalResult.push(arr[i])
         }
     }

     const uniElement = [...new Set(finalResult)]

     return uniElement

    Method 2

    arr.filter((ele)=>{
         if(!result.includes(ele)){
             result.push(ele)
         }else{
            finalResult.push(ele)
       }
     })

    const uniqueEle = [...new Set(finalResult)]

     return uniqueEle

    Method 3

    let count = {};

    forEach and filter both works here

    arr.filter(element => {
        if(count[element]){
            count[element] = count[element] + 1
        }else{
            count[element] = 1
        }
    });

    for(let ele in count){
        console.log(`${ele} - ${count[ele]}`)
    }

    return count;

     for(let ele of arr){
        count[ele] = (count[ele] || 0) + 1
     }

     let uniqueEle = [];

     for(let ele in count){
         if(count[ele]>1){
             uniqueEle.push(ele)
         }
     }

     return {count,uniqueEle}
}

findRepeatedNumber(arr)
console.log(findRepeatedNumber(arr))

## Q.5 Flatten Array
const arr = [1,2,[3,4,[5,6,7]],8,9,[10,[11]],[[12]]]

function flattenArray(arr){

     let result = [];

     Method 1
     function rec(x){
          for(let ele of x){
             if(Array.isArray(ele)){
                  rec(ele)
              }else{
                  result.push(ele)
              }
          }
      }
      rec(arr)

     Method 2
      for(let item of arr){
          if(Array.isArray(item)){
              result.push(...flattenArray(item))
          }else{
              result.push(item)
          }
      }

     Method 3
     for (let item of arr) {
         if (Array.isArray(item)) {
             result = result.concat(flattenArray(item));
         } else {
             result = result.concat(item);
         }
     }

     return result;
 }
 console.log(flattenArray(arr))

const nested = [1,2,[3,4,[5,6,7]],8,9,[10,[11]],[[12]]]

const flat = [].concat(...nested)

console.log(flat)

const flat_again = [].concat(...flat)

console.log(flat_again)

## Q.6 Union & Intersection

    union        :- All unique element from both
    intersection :- only common element from both

const arr1 = [1,2,3,4,5,6]
const arr2 = [4,5,6,7,8,9]

 function unionOfArray(arr1,arr2){

      let result = [];

     M-1    
      for(let i=0;i<arr1.length;i++){
         result.push(arr1[i])
      }

      for(let j=0;j<arr2.length;j++){
          result.push(arr2[j])
      }
     const finalResult = [...new Set(result)]

     return finalResult

        M-2

      const result = [...new Set([...arr1,...arr2])]
      return result

     M-3

   const arr3 = arr1.concat(arr2.filter(x=> !arr1.includes(x)))
    return arr3

    M-4
     const result = [...arr1,...arr2]
     const finalResult = []

     for(let i=0;i<result.length;i++){
         if(!finalResult.includes(result[i])){
             finalResult.push(result[i])
         }
     }

     return finalResult


 }

 console.log(unionOfArray(arr1,arr2))

function intersectionOfArray(aar1,arr2){

     const result1 = []
     const result2 = []

     const combine = [...aar1,...arr2]

    M-1

     for(let i=0;i<combine.length;i++){
         if(!result1.includes(combine[i])){
             result1.push(combine[i])
         }else{
             result2.push(combine[i])
         }
     }

     return result2

     M-2

     combine.filter((ele)=>{
         if(!result1.includes(ele)){
             result1.push(ele)
         }else{
             result2.push(ele)
         }
     })

     return result2

    M-3
    const result = arr1.filter((item)=>arr2.includes(item))
    return result
}

console.log(intersectionOfArray(arr1,arr2))

## Q.7 Arrange positive and negative number

const arr = [1,2,-1,3,-2,4,6,-5,8,-4,-3,7,10,-6,-8]

function arrPosNeg(arr){

    const pos = [];
    const neg = [];

    //M-1

    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            neg.push(arr[i])
        }else{
            pos.push(arr[i])
        }
    }

    const result = [...pos,...neg]

    return {pos,neg}
    return result

    //M-2

    arr.filter((ele)=>{
        if(ele<0){
            neg.push(ele)
        }else{
            pos.push(ele)
        }
    })

    const result = [...pos,...neg]
    return result
}

console.log(arrPosNeg(arr))

## Q.8 Alternate positive and negative number

//M-1

function alternatePosNeg(arr){

    const result = [];
    const pos = [];
    const neg = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            pos.push(arr[i])
        }

        if(arr[i]<0){
            neg.push(arr[i])
        }
    }

    const maxLength = Math.max(pos.length,neg.length)

    for(let i=0;i<maxLength;i++){
        if(i<pos.length){
            result.push(pos[i])
        }

        if(i<neg.length){
            result.push(neg[i])
        }
    }

    // return {pos,neg}
    return result;


}
console.log(alternatePosNeg(arr))


//M-2

function altPosNeg(arr){

    const { pos, neg } = arr.reduce((acc, curVal) => {
        if (curVal > 0) {
            acc.pos.push(curVal);
        } else if (curVal < 0) {
            acc.neg.push(curVal);
        }
        return acc; // important: return the accumulator
    }, { pos: [], neg: [] });

    console.log({ pos, neg });

    return pos.reduce((acc, cur, i) => {
        acc.push(cur);
        if (i < neg.length) acc.push(neg[i]);
        return acc;
    }, []);


}

console.log(altPosNeg(arr))

## Q.9 Mover all zeros at the end

const arr = [1,0,2,3,0,4,2,5,0,0,0,6,7,8]

function moveAllZeroToEnd(arr){

    const non_zero = [];
    const zero = [];

    //M-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zero.push(arr[i])
        }else{
            non_zero.push(arr[i])
        }
    }

    const result = [...non_zero,...zero]

    return result

    //M-2

    arr.filter((ele)=>{
        if(ele===0){
            zero.push(ele)
        }else{
            non_zero.push(ele)
        }
    })

    //const result = [...non_zero,zero]  //[ 1, 2, 3, 4, 2, 5, 6, 7, 8, [ 0, 0, 0, 0, 0 ] ]
    const result = [...non_zero,...zero]
    return result

    //M-3

    const {non_zero,zero} = arr.reduce((acc,cur)=>{
        if(cur === 0){
            acc.zero.push(cur)
        }else{
            acc.non_zero.push(cur)
        }
        return acc
    },{non_zero :[],zero:[]})

    const result = [...non_zero,...zero]
    return result
}

console.log(moveAllZeroToEnd(arr))


## Q.10 Alternate non_zero and zero 

Ans :-
    const arr = [1,0,2,3,0,4,2,5,0,0,0,6,7,8]

function altZeroandNumber(arr){

    //M-1

    const zero = [];
    const non_zero = [];
    const result = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            zero.push(arr[i])
        }else{
            non_zero.push(arr[i])
        }
    }

    for(let j=0;j<Math.max(zero.length,non_zero.length);j++){
        if(j<non_zero.length){
            result.push(non_zero[j])
        }

        if(j<zero.length){
            result.push(zero[j])
        }
    }

    return result;

    //M-2

    arr.filter((ele)=>{
        if(ele === 0){
            zero.push(ele)
        }else{
            non_zero.push(ele)
        }
    })

   return non_zero.reduce((acc,cur,i)=>{
        acc.push(cur)
        if(i<zero.length){
            acc.push(zero[i])
        }

        return acc
   },[])
}

console.log(altZeroandNumber(arr))

## Q.11 Given an array of integers, return the two numbers that add upto a target(two-sub problem).

const arr = [1,2,3,4,5,6,7,8,9];

//target : 9 
//o/p  : [1,8],[2,7],[3,6],[4,5]

function targetTwoNub(arr,target){

    for(let  i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === target){
                return [arr[i],arr[j]]
                return [i,j]
            }
        }
    }
}

console.log(targetTwoNub(arr,9))

function returnAllPair(arr,target){

    let result = [];

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                result.push([arr[i],arr[j]])
            }
        }
    }

    return result

}

console.log(returnAllPair(arr,9))

## Q.12 find the first non-repeating elements in array.
Ans :-
    const arr = [1,2,3,4,1,5,2,3,10,8,9,10,11]

function firstNonRepeat(arr){

    let freq = {}; 

    for(let item of arr){
        freq[item] = (freq[item] || 0) +1
    }

    let result  = [];

    for(let num in freq){
        if(freq[num] === 1){
            return num    //first non-repeating number
            result.push(num) //All non-repeating number
        }
        
    }

    return result

}

console.log(firstNonRepeat(arr))

## Q.13 find the first repeating elements in array.
Ans :- 
    const arr = [1,2,3,4,2,1,5,2,3,10,8,9,10,11]

function firstRepeatNum(arr){

    let seen = new Set();

    for(let item of arr){
        if(seen.has(item)){
            return item
        }
        seen.add(item)
    }
    return null;
}

console.log(firstRepeatNum(arr))

## Q.14 find missing number.
Ans :-
    const arr = [1,3,5,9,11]

function missingNumber(arr){

    const sum1 = arr.reduce((acc,curVal)=>{
        return acc = acc+curVal;
    },0)

    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let sum2 =0;

    for(let i=min;i<=max;i++){
        if(i%2 !==0){
            sum2 = sum2+i
        }
    }

    const result = sum2-sum1
    return result

}

console.log(missingNumber(arr))

## Q.15.1 find missing number from a range.
Ans :-
    const arr = [1,2,4,6]

function missingFromRange(arr){

    let result = [];

    let min = Math.min(...arr)
    let max = Math.max(...arr)

    for(let i=min;i<=max;i++){
        if(!arr.includes(i)){
            result.push(i)
        }
    }
    return result;

}

console.log(missingFromRange(arr))

## Q.15.2 find missing from odd or even number
Ans :-
    const arr = [1,3,7,11,15,17,21]
    const arr1 = [2,6,10,12,16,18,22]

function findMissingFromRange(arr1){

    let result = [];

    let min = Math.min(...arr1)
    let max = Math.max(...arr1)

    for(let i=min;i<=max;i++){
        if(i%2 ===0 && !arr1.includes(i)){
            result.push(i)
        }
    }

    return result
}

console.log(findMissingFromRange(arr1))

## Q.17.1 find nth largest number
Ans :-
    const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

function findNthLargestNum(arr,n){

    const sortedArr = arr.sort((a,b)=>b-a)

    console.log(sortedArr)

    return sortedArr[n-1]
}

console.log(findNthLargestNum(arr,3))


## Q.17.2 Remove first largest and find second largest number.
Ans :-
    function find(arr,n){

    const arr2 = arr.sort((a,b)=>b-a);

    const arr3 = [...arr2]

    const result1 = arr3.splice(0,1)
    const result2 = arr2[n-1]

    return {firLargest : result1,secLargest : result2,arr3}
}

console.log(find(arr,2))

## Q.17.3 Finding the second smallest element in an array.
Ans :-
    function NthSmallestNum(arr,n){

    const sortedArr = arr.sort((a,b)=>a-b)

    console.log(sortedArr)

    return sortedArr[n-1]
}

console.log(NthSmallestNum(arr,2))

## Q.18 find first three largest number.
Ans :-
    function firstThreeLargest(arr,n){

    const sortedArr = arr.sort((a,b)=>b-a)

    return sortedArr.slice(0,n)

}

console.log(firstThreeLargest(arr,3))

## Q.19.1 Remove duplicates without using set method.
Ans :-
    const arr = [1,2,1,3,4,2,4,7,5,9,10,15,11,12,20,1,2,4,3,0,0,0,7,5,9]

function removeDuplicate(arr){

    const newArr = [...new Set(arr)].sort((a,b)=>a-b)

    console.log(newArr)

    const result = [];

    for(let ele of arr){
        if(!result.includes(ele)){
            result.push(ele)
        }
    }

    return result.sort((a,b)=>a-b)

}

console.log(removeDuplicate(arr))

## Q.19.2 Find average of the array.
Ans :-
    const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

    function avgOfNum(arr){

        const sum = arr.reduce((acc,curVal)=>{
            return acc = acc+curVal;
        },0)

        const avg = sum/arr.length;

        return avg;

    }

    console.log(avgOfNum(arr))

## Q.20.1  Reverse an array without using reverse .
Ans :-
    const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

function reverseArr(arr){

    const result = [];

    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }

    return result;

}

console.log(reverseArr(arr))

## Q.20.2. In place reverse.
Ans :-
    const arr = [45, 12, 89, 33, 7, 56, 90, 21, 67, 38];

    function reverseInPlcae(arr){

        let j=arr.length-1

        for(let i=0;i<j;i++,j-->){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        return arr;
    }

    console.log(reverseInPlcae(arr))

## Q.21 Split [1,2,3,4,5] into [[1,2],[3,4],[5]]
Ans :-
    const arr = [1,2,3,4,5];

function splitArr(arr){

    let result = [];

    for(let i=0;i<arr.length;i+=2){
        if(i+1<arr.length){
            result.push([arr[i],arr[i+1]])
        }else{
            result.push([arr[i]])
        }
    }

    return result;
}

console.log(splitArr(arr))

or
 
const arr = [1,2,3,4,5,6,7,8,9,10,11]

function splitArr(arr,chunkSize){

    let result = [];

    for(let i=0;i<arr.length;i+=chunkSize){
        result.push(arr.slice(i,i+chunkSize))
    }

    return result;
}

console.log(splitArr(arr,2))

## Q.22 Currying fn for infinite sum

## Q.23 Remove falsy value from array ex:- [0,null,undefined,'',5]

## Q.24 Factorial of a number

## Q.25 Fibonacci series

## Q.26 Palindrome, Armstrong, Reverse a number, perfect number, GCD & LCD, Prime factor.

## Q.16 find all prime number in an array.

## Q.27 Print all prime numbers in a given range. Find All Prime Numbers up to Nth.

## Q.28 Find the sum of first 'N' natural numbers.

## Q.29 Flatten deep Object+Arrays. 

Ex:- {a:{b:[1,2]}} -> {"a.b.0" : 1,"a.b.1" : 2}

## Q.30 Polyfill : 1.call, 2.apply, 3.bind, 4.forEach, 5.map

## Q.31 Convert Number to Roman Numerals.

## Q.32 Merge Arrays of Objects by id.

###### DSA ######
## Q.1 Find the longest increasing subsequence in an array.

## Q.2 Rotate an array by k steps(both left and right rotation).

## Q.3 Maxm subarray -> find the contiguous subarray with the largest sum.

## Q.4 Subarray with given sum -> find if there exits a subarray with a sum equal to k.

## Q.5 Tripplet sum -> find all unique tripllets that sum to zero(3-sum problem).

## Q.6 Find the element that appears more than n/2 times in an array.

## Q.7 for each element, find the next greater element on the right side.

## Array Of Object ##

const employees = [
  { id: 1, name: "Sushil", salary: 50000 },
  { id: 2, name: "Amit", salary: 60000 },
  { id: 3, name: "Priya", salary: 75000 },
  { id: 4, name: "Ravi", salary: 55000 },
  { id: 5, name: "Neha", salary: 80000 }
];

# Find the employee with the highest salary.

# Find the employee with the lowest salary.

# Filter all employees whose salary is greater than 60,000.

# Get only the names of all employees.

# Sort employees by salary (ascending & descending).

# Calculate the total salary of all employees.

# Find the average salary.

# Check if an employee with id = 3 exists.

# Increase everyone’s salary by 10%.

# Return employees whose name starts with “S”.

const students = [
  { id: 1, name: "Sushil", marks: 85 },
  { id: 2, name: "Amit", marks: 92 },
  { id: 3, name: "Priya", marks: 76 },
  { id: 4, name: "Ravi", marks: 65 },
  { id: 5, name: "Neha", marks: 88 },
  { id: 6, name: "Karan", marks: 55 },
  { id: 7, name: "Meena", marks: 95 },
  { id: 8, name: "Arjun", marks: 70 },
  { id: 9, name: "Rohit", marks: 82 },
  { id: 10, name: "Simran", marks: 60 }
];

# Find the student with the highest marks.

# Find the student with the lowest marks.

# Get the list of students who scored more than 80.

# Count how many students scored less than 60.

# Sort students by marks (highest → lowest).

# Calculate the average marks of all students.

# Get only the names of students who passed (marks ≥ 40).

# Find the top 3 rankers.

# Check if a student with id = 5 exists.

# Increase everyone’s marks by 5 bonus points.
