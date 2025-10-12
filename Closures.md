## Closures examples

## Q.1 Fibonacci series using closures
Ans:-

    function createFibonacciFinder(){

        let cachedResult = {};

        let initalized = false;

        function fib(n){

            if(n<=1) return n;

            if(cachedResult[n] !== undefined){
                return cachedResult[n]
            }

            const result = fib(n-1) + fib(n-2)

            cachedResult[n] = result;
            return result

        }

        function printFib(n){
            let series = [];

            let cacheHit = initalized && cachedResult[n] !== undefined

            if(cacheHit){
                console.log('cached result')
            }

            for(let i=0;i<=n;i++){
                series.push(fib(i))
            }

            initalized = true;
            return series
        }

        return printFib
    }

    const result = createFibonacciFinder();
    const firstSeries = result(5)
    console.log(firstSeries)
    const secondSeries = result(5)
    console.log(secondSeries)
    const thirdSeries = result(6)
    console.log(thirdSeries)

## Q.3 Returned element of pos from fibonacci series.
Ans:-

    function createFibonacciFinder(){
    
        let cache = {};
        
        function fib(n){
            
            if(n<=1) return n
            
            if(cache[n] !== undefined){
                return cache[n]
            }
            
            // return cache[n] = fib(n-1) + fib(n-2)
            const result = fib(n-1) + fib(n-2)
            cache[n] = result
            return result
        }
        
        function returnPosition(pos){
            
            if(cache[pos] !== undefined){
                console.log(`Returned cache for pos ${pos} :- ${cache[pos]}`)
                
                return cache[pos]
            }
            
            const result = fib(pos)
            cache[pos] = result
            return result
        }
        return returnPosition
    }

    const result = createFibonacciFinder();

    const pos1 = result(5)
    console.log(pos1)
    const pos2 = result(6)
    console.log(pos2)
    const pos3 = result(5)
    console.log(pos3)

## Q.3 Returned fibonacci number from series for given pos:-
Ans :-

    function createFibonacciFinder(){

        let cache = {};
        let series = [0,1];
        // let series = [];

        function generateFib(n){

            for(let i=2;i<n;i++){
                series[i] = series[i-1] + series[i-2]
            }
            return series
        }
        generateFib(8)
        console.log('Series :-',series)

        function returnedPos(pos){

            if(cache[pos] !== undefined){
                console.log(`Return pos from cache for pos ${pos} :- ${cache[pos]}`)
                return cache[pos]
            }

            const result = series[pos]
            // console.log(`Result for ${pos} :-`,result)
            cache[pos] = result;
            // console.log('cached pos:-',cache[pos])
            console.log(cache)
            return result
        }
        return returnedPos
    }

    const result = createFibonacciFinder();
    const getPos1 = result(6)
    console.log(getPos1)
    result(6)
    const getPos2 = result(9)
    console.log(getPos2)
    result(9)

# Using recursion
Ans:-

    function createFibonacciFinder(){

        let cache = {};
        let series = [0,1];

        function generateFib(n){

            if (series[n] !== undefined) return series[n];
            
            const result = generateFib(n - 1) + generateFib(n - 2);
            
            series[n] = result; 
            return result;

        }
        generateFib(8)
        console.log('Series :-',series)

        function returnedPos(pos){

            if(cache[pos] !== undefined){
                console.log(`Return pos from cache for pos ${pos} :- ${cache[pos]}`)
                return cache[pos]
            }

            const result = series[pos]
            cache[pos] = result;
            return result
        }
        return returnedPos
    }

    const result = createFibonacciFinder();
    const getPos1 = result(6)
    console.log(getPos1)
    result(6)
    const getPos2 = result(9)
    console.log(getPos2)
    result(9)


## Q.4 Factorial using closures.
Ans :-

    function createFactorialFinder(){
        const cachedResult = {};

        let flag = false;

        function fact(n){
            if(n===0) return 1

            if(cachedResult[n] !== undefined){
                return cachedResult[n]
            }

            const result = n*fact(n-1);

            cachedResult[n] = result

            return result;
        }

        function printFact(n){
            const series = [];

            let cacheHit = flag && cachedResult[n] !== undefined

            if(cacheHit){
                console.log('cached result')
            }

            for(let i=1;i<=n;i++){
                series.push(fact(i))
            }
            flag = true;
            return series
        }
        return printFact;

    }

    const result = createFactorialFinder();

    const fact1 = result(5)
    console.log(fact1)
    const fact2 = result(5)
    console.log(fact2)
    const fact3 = result(6)
    console.log(fact3)

## Q.5 Return position of fictorial
Ans :-

    function createFactorialFinder(){
    
        let cache = {};
        
        let fact = [];
        
        function factorial(n){
            // fact[0] = 1
            let temp = 1;
            
            for(let i=1;i<=n;i++){
                // fact[i] = i*fact[i-1]
                temp = (i === 1) ? 1 : temp * i;  
                fact.push(temp);  
            }
            return fact
        }
        factorial(8)
        console.log('Factorial:-',fact)

        function findPos(pos){
            
            if(cache[pos] !== undefined){
                console.log(`Return result from cache for pos ${pos} :- ${cache[pos]}`)
                return cache[pos]
            }
            const result = fact[pos];
            cache[pos] = result
            return result
        }
        return findPos
    }

    const result = createFactorialFinder()

    const pos1 = result(4);
    console.log(pos1)
    result(4)

# Using recursion
Ans:-

    function createFactorialFinder(){
    
        let cache = {};
        
        let fact = [];
        
        function factorial(n){
        
            if(n===1) return fact.push(1)
            
            const result = n*factorial(n-1);
            
            fact[n-1] = result
            
            return result
        }
        factorial(8)
        console.log('Factorial:-',fact)

        function findPos(pos){
            
            if(cache[pos] !== undefined){
                console.log(`Return result from cache for pos ${pos} :- ${cache[pos]}`)
                return cache[pos]
            }
            const result = fact[pos];
            cache[pos] = result
            return result
        }
        return findPos
    }

    const result = createFactorialFinder()

    const pos1 = result(4);
    console.log(pos1)
    result(4)







