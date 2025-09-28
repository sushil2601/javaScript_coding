<!-- Q.1 Find Rank  -->

const arr = [1,2,3,4,5,6,7,8]

//i/p :- 3,7
//o/p :- [1,2,4,5,6,7,3,8]

//i/p :- 7,3
//o/p :- [1,2,7,3,4,5,6,8]

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

// console.log(findRank(arr,3,7))
console.log(findRank(arr,7,3))

<!-- Q.2 swap element in array -->

const arr = [1,2,3,4,5,6,7,8]

function swapElement(arr,n1,n2){

    const arr2 = [...arr]

    console.log(arr2)

    const fromIndex = n1-1;
    const toIndex = n2-1;

    let temp = arr2[fromIndex]
    arr2[fromIndex] = arr2[toIndex]
    arr2[toIndex] = temp


    //without using temp variable

    // [arr2[fromIndex],arr2[toIndex]] = [arr2[toIndex],arr2[fromIndex]]

    return arr2;

}

console.log(swapElement(arr,3,7))
console.log(swapElement(arr,4,8))

<!-- Q.3 find index of element -->

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

<!-- Q.4  -->

// I/P = [10,20,22,10,20,27,35,15,35]
// O/P = [10,20,35]

const arr = [10,20,22,10,20,27,10,35,15,35]

function findRepeatedNumber(arr){

    let result = [];
    let finalResult = [];

    //Method 1
    // for(let i=0;i<arr.length;i++){
    //     if(!result.includes(arr[i])){
    //         result.push(arr[i])
    //     }else{
    //         finalResult.push(arr[i])
    //     }
    // }

    // const uniElement = [...new Set(finalResult)]

    // return uniElement

    //Method 2

    // arr.filter((ele)=>{
    //     if(!result.includes(ele)){
    //         result.push(ele)
    //     }else{
    //         finalResult.push(ele)
    //     }
    // })

    // const uniqueEle = [...new Set(finalResult)]

    // return uniqueEle

    //Method 3

    let count = {};

    //forEach and filter both works here
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

    // return count;

    // for(let ele of arr){
    //     count[ele] = (count[ele] || 0) + 1
    // }

    // let uniqueEle = [];

    // for(let ele in count){
    //     if(count[ele]>1){
    //         uniqueEle.push(ele)
    //     }
    // }

    // return {count,uniqueEle}
}

findRepeatedNumber(arr)

// console.log(findRepeatedNumber(arr))

<!-- Q.5 Flatten Array -->
const arr = [1,2,[3,4,[5,6,7]],8,9,[10,[11]],[[12]]]

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

const nested = [1,2,[3,4,[5,6,7]],8,9,[10,[11]],[[12]]]

const flat = [].concat(...nested)

console.log(flat)

const flat_again = [].concat(...flat)

console.log(flat_again)

<!-- Q.6 Union & Intersection -->

/*
    union        :- All unique element from both
    intersection :- only common element from both
*/

const arr1 = [1,2,3,4,5,6]
const arr2 = [4,5,6,7,8,9]

// function unionOfArray(arr1,arr2){

//     // let result = [];

//     //M-1    
//     // for(let i=0;i<arr1.length;i++){
//     //    result.push(arr1[i])
//     // }

//     // for(let j=0;j<arr2.length;j++){
//     //     result.push(arr2[j])
//     // }

//     // const finalResult = [...new Set(result)]

//     // return finalResult

//     //M-2

//     // const result = [...new Set([...arr1,...arr2])]
//     // return result

//     //M-3

//     // const arr3 = arr1.concat(arr2.filter(x=> !arr1.includes(x)))
//     // return arr3

 //M-4
    // const result = [...arr1,...arr2]
    // const finalResult = []

    // for(let i=0;i<result.length;i++){
    //     if(!finalResult.includes(result[i])){
    //         finalResult.push(result[i])
    //     }
    // }

    // return finalResult


// }

// console.log(unionOfArray(arr1,arr2))

function intersectionOfArray(aar1,arr2){

    // const result1 = []
    // const result2 = []

    // const combine = [...aar1,...arr2]

    //M-1

    // for(let i=0;i<combine.length;i++){
    //     if(!result1.includes(combine[i])){
    //         result1.push(combine[i])
    //     }else{
    //         result2.push(combine[i])
    //     }
    // }

    // return result2

    //M-2

    // combine.filter((ele)=>{
    //     if(!result1.includes(ele)){
    //         result1.push(ele)
    //     }else{
    //         result2.push(ele)
    //     }
    // })

    // return result2

    //M-3
    const result = arr1.filter((item)=>arr2.includes(item))
    return result
}

console.log(intersectionOfArray(arr1,arr2))

