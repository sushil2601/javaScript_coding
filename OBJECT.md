# Q.1 Implement a function that uses recursion to compute the sum of all numbers in a nested object. If null, string, or undefined skip the addition process.

# Input : {a:1,b:{c:2,d:3},e:4}
# Output : 10
# Input : {a:1,b:{c:2,d:3},e:{f:"67",g:undefined,h:10}}
# Output : 16

Ans :-
    function sumOfObj(obj){

        let sum = 0;

        for(let key in obj){
            let value = obj[key]

            if(typeof value === "number"){
                sum = sum + value;
            }else if(typeof value === "object" && value !== null){
                sum = sum + sumOfObj(value);
            }
        }
        return sum;
    }

    console.log(sumOfObj(obj))

# Q.2 