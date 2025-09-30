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

## Q.13 find the first repeating elements in array.

## Q.14 find missing number.

## Q.15 find missing number from a range.

## Q.16 find all prime number in an array.

## Q.17 find nth largest number and remove first largest. Finding the second smallest element in an array

## Q.18 find first three largest number.

## Q.19 Remove duplicates without using set method.

## Q.20 Split [1,2,3,4,5] into [[1,2],[3,4],[5]]

## Q.21 Reverse an array without using reverse :- 1. simple reverse  2. in place reverse

## Q.22 Currying fn for infinite sum

## Q.23 Remove falsy value from array ex:- [0,null,undefined,'',5]

## Q.24 Factorial of a number

## Q.25 Fibonacci series

## Q.26 Palindrome, Armstrong, Reverse a number, perfect number, GCD & LCD, Prime factor.

## Q.27 Print all prime numbers in a given range. Find All Prime Numbers up to Nth.

## Q.28 Find the sum of first 'N' natural numbers.

## Q.29 Flatten deep Object+Arrays.

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

## Q.8 
