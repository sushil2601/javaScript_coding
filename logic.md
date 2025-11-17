## Logical question  

# Important Rule:-
    
    1. +, -, *, / → force numeric conversion.

    2. Any time JavaScript tries to perform arithmetic on a non-numeric string, it produces NaN (Not-a-Number).

    3. The + operator gives priority to string concatenation if any operand is a string.Other operators like -, *, / always convert operands to numbers.

    4. 

# Q.1
Ans :-

    let a=undefined;
    let b='This is';
    let c=true;

    console.log(b+a) //This isundefined
    console.log(b-a)//NaN

    console.log(10 + true);//11
    console.log("hello" + false);//hellofalse

    console.log("hello" + "hello" );//hellohello
    console.log(null + 5);//5
    console.log([1, 2] + 3);//1,23
    console.log(typeof ([1, 2] + 3));//string

# Q.2 undefined and null
Ans :-

    const a = undefined
    const b = undefined

    console.log(a+b)//NaN
    console.log(a-b)//NaN
    console.log(a*b)//NaN
    console.log(a/b)//NaN

    const a = null;
    const b = null;
    const c = undefined
    const d = undefined

    console.log(a+b)//0
    console.log(a-b)//0

    console.log(a+c)//NaN
    console.log(a+d)//NaN

# Q.3 Arithmetic operation on boolean value.
Ans :-

    const a = true
    const b = true

    const c = false
    const d = false

    console.log(a+b) //2
    console.log(a-b) //0
    console.log(c+d) //0
    console.log(c-d) //0
    console.log(a-c) //1
    console.log(d-b) //-1

    console.log(a/c) //Infinity
    console.log(c/d) //NaN

# Any time JavaScript tries to perform arithmetic on a non-numeric string, it produces NaN (Not-a-Number).
Ans :-

    console.log(10-false)  //10
    console.log(false-10) //-10
    console.log(true-10)  //-9
    console.log(false+"hello") //falsehello
    console.log(false-"hello") //NaN
    console.log(true+"hello") //truehello
    console.log(true-"hello") //NaN
    console.log("hello"-false) //NaN
    console.log(true*"hello") //NaN
    console.log(false*"hello") //NaN

#  The + operator gives priority to string concatenation if any operand is a string.Other operators like -, *, / always convert operands to numbers.
Ans :-

    console.log(2-"4")     //-2
    console.log("4"+2)     //42
    console.log("4"-2)     //2
    console.log(2*"2")     //4
    console.log(2/"4")     //0.5
    console.log("4"/2)     //2
    console.log(2+4+"2")   //62
    console.log(2+4-"4")   //2
    console.log("4"+2+2)   //422
    console.log("4"+(2+2)) //44

# 
Ans :-

    console.log([1,2,3] + "4")      //1,2,34
    console.log([1,2,3]+[1,2,3])   //1,2,31,2,3
    console.log([1,2,3] -"4")      //NaN


    console.log({}+[]) //[object Object]
    console.log({} === []) //false
    console.log([] === []) //false
    console.log([]+true)   //true
    console.log([]+false)  //false
    console.log(true+false)   //1
    console.log(true+true)    //2
    console.log(false+false)  //0
    console.log("hello"+true) //hellotrue
    console.log("hello" + false) //hellofalse
    console.log("hello"+[])      //hello
    console.log("hello"-[])      //NaN

    console.log(2+"2"-2)  //20
    console.log(2+"2")       //22
    console.log(2+ +"2")     //4
    console.log(2+ -"4")        //-2
    console.log(2+ !"2")        //2

    console.log([]+[])  //""
    console.log([]+![]) //false
    console.log([] == ![]) //true
    console.log([] === ![]) //false
    console.log([0] == false)  //true
    console.log(NaN == NaN) //false -> NaN is never equal to anything
    console.log(undefined == NaN)  //false
    console.log(NaN === NaN)       //false
    console.log(undefined === NaN) //false
    console.log(undefined === undefined) //true













