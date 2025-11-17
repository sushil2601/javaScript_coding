## Practical Questions :-

# Q. Difference b/w http and https.
Ans :-
    .Http  :- stands for hypertext transfer protocol
    .https :- stands for hypertext transfer protocol plus 'S' stands for security.
              .Https is more secure than http,because they use ssl and tls certificate.
              .based with configuration of ssl and tls certificate in https , it makes an insecure n/w more secure.so that https is preferable more than http.

# Q. Lets say i have 3 api calls :- getUsers(), getOrders() & getCart() , I need to wait until all the 3 api calls are completed and display in dashboard.
Ans :-

    1. function getUser(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('User data loaded')
            },1000)
        })
    }

    2. function getOrders(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('Orders data loaded')
            },1500)
        })
    }

    3. function getCart(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('Cart data loaded')
            },5000)
        })
    }

    Promise.all([getUser(),getOrders(),getCart()])
    .then((result)=>{
        console.log('All data loaded')
        console.log('results') //['User data loaded','Orders data loaded','Cart data loaded']
    })
    .catch((error)=>{
        console.log('One of the calls failed :',error)
    })

    .Total time taken by this api call is longest api time i.e. 5000

    .If one API fails, I first retry it for a specified threshold (say 3 attempts) with a delay between retries.
    If it still fails after all retries:
    .Show a proper error message to the user (e.g. “Orders data failed to load”).
    .Don’t block other successful APIs — the rest of the dashboard still loads.


## Scenario :- Api's are dependent on each other
Ans :-

    If the APIs are dependent on each other (say):

    1️⃣ getUser() → 2️⃣ getOrders(userId) → 3️⃣ getCart(orderId)
    and suppose the 2nd API fails, then:

    I stop the execution chain immediately, because the next API (3rd one) depends on data from the failed one.

    I handle the error gracefully — for example, show a message like “Unable to fetch orders, please try again.”

    Optionally, I can retry the failed API (like 2–3 times with delay).

    If it still fails, I can either:

    Allow partial loading (show only user data), or

    Use cached data / fallback response, if available.

    I also log the error for monitoring (to fix backend or network issues).

# Q. show related components one at a time when a user clicks on a parent component.
Ans :-

    .can use drop down
    .can use next-prev concept.(based on current index)

# Q. 
    
# Q. We have ssl incoming connection where do you terminate it in terms of your cloud boundary.



# Performance optimization techniques :-  
2. What is Acl and access control list how do you handle it in your project 
3. Which ORM  did you use?
4. Tell me how to define a relationship 
5. What is microservices 
6. Get request and response via middleware
8. How to optimize large data set
9. CI/Cd
9. Error handling 
10. Webhooks
13. How do you store token and frontend and access in backend
14. MySQL join
15. Aggregate functions get unique users which doesn't have duplicate phone no.
16. AWS service 
17. Lambda

