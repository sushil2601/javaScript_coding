## Aggregation  :- syntax = db.collection.aggregate([pipeline,option])

## Q.1 find out all male teachers.
Ans :-
     db.teachers.aggregate([{$match : {gender : 'Male'}}])
## Q.2 Group teachers by age and show all teachers names per age group
Ans :-
    db.teachers.aggregate([{$group : {_id : "$age",names:{$push : "$name"}}}]) //"age" -> string , "$age" -> fields

## Q.3 Group teachers by age and show complete documents
Ans :-
    db.teachers.aggregate([{$group : {_id : "$age",students : {$push : "$$ROOT"} }}])

## Q.4 Give a count per age of male teacher
Ans :-
    db.teachers.aggregate([{$match : {gender : "Male"}},{$group : {_id:"$age",count : {$sum : 1}}}])

## Q.5 Give a count per age of male teacher and sort them by count in desc manner
Ans :-
    . db.teachers.aggregate([{$match : {gender : "Male"}},{$group : {_id : "$age",count : {$sum : 1}}},{$sort : {count : -1}}])

    . db.teachers.aggregate([{$match : {gender : "Male"}},{$group : {_id : "$age",count : {$sum : 1}}},{$sort : {count : -1}},{$group : {_id : null,maxInAgeGroup : {$max : "$count"}}}])

     o/p :- [ { _id: null, maxInAgeGroup: 2 } ]

    . db.teachers.aggregate([{$group : {_id : "$age",sumOfAgesInEachGroup : {$sum : {$toDouble : "$age"}}}}])

    or 

    . db.teachers.aggregate([{$group : {_id : "$age",sumOfAgesInEachGroup : {$sum : "$age"}}}])

    .db.teachers.aggregate([{$match : {experience : {$gte : 5}}},{$group : {_id : "$experience",sumOfExp : {$sum : "$experience"}}},{$sort : {sumOfExp : 1}},{$limit : 4}])

## Q.6 Find hobbies per age group
Ans :-
    school> db.employees.aggregate([{$group : {_id : "$age",hobbies : {$push : "$hobbies"}}}])

    school> db.students.aggregate([{$unwind : "$hobbies"},{$group : {_id : "$age",hobbies : {$push : "$hobbies"}}},{$limit : 5}])

    school> db.students.aggregate([{$unwind : "$hobbies"},{$group : {_id : "$hobbies",count : {$sum : 1}}}])

## Q.7 find avg age of all students
Ans :-
    school> db.students.aggregate([{$group : {_id : null,avgAge : {$avg : "$age"}}}])

## Q.8 find the total number of hobbies for all the students in a collection
Ans :-
    school> db.students.aggregate([{$unwind : "$hobbies"},{$group : {_id : null,count : {$sum : 1}}}])

    or,

    school> db.students.aggregate([{$group : {_id : null,count : {$sum : {$size : {$ifNull : ["$hobbies",[]]}}}}}])

    o/p :- [ { _id: null, count: 61 } ]

## Q.9 Find all habits
Ans :-
    school> db.students.aggregate([{$group : {_id : null,allHabbits : {$push : "$hobbies"}}}]) --> duplicate exits

    school> db.students.aggregate([{$group : {_id: null, allHabbits : {$addToSet : "$hobbies"}}}]) --> duplicate remove

## Q.10 Find the average of scores for students whose age is greater than 20.
Ans :-
    db.students2.aggregate([{$group : {_id : null,avgScore : {$avg : {$filter : {input : "$scores",as : "score",cond : {$gt : ["$age",  20]}}}}}}])   --> some problem in this query

## Q.11 Categorize male teachers based on their ages into three buckets,ages less than 30,ages b/w 30-40,ages greater than 40.
Ans :-
    db.teachers.aggregate([{$match : {gender : "Male"}},{$bucket : {groupBy : "$age",boundaries : [0,30,40],default : "Greater than 40",output : {count : {$sum : 1}}}}])

    output :- [ { _id: 30, count: 6 }, { _id: 'Greater than 40', count: 9 } ]

    db.teachers.aggregate([{$match : {gender : "Male"}},{$bucket : {groupBy : "$age",boundaries : [0,30,40],default : "Greater than 40",output : {count : {$sum : 1},names : {$push : "$name"}}}}])

## Q.12 Perfrom join opertion on customers and orders 
Ans :-
    -> Left_outer join :-
    ----------------------

    school> db.customers1.aggregate([{$lookup : {from : "orders",localField : "_id",foreignField : "customerId",as : "order_details"}}])

    -> Right_outer join :-
    -----------------------


    -> Inner Join :-
    -----------------


    -> Full_outer Join :-
    ----------------------

## Q.13 Use project operatot to rename field and bring those field which we want
Ans :-
    school> db.students.aggregate([{$project : {name : 1,age : 1,_id : 0,Bio:"$bio"}}])

    db.students.aggregate([{$project : {name:1,age : 1,_id : 0,monthlySalary : "$salary",annualSalary : {$multiply : [12,"$salary"]}}}])   --> used expression here.

## Q.14 





###### Notes ########

# To show database : - show databases or show dbs
# To switch database :- use [databaseName]
# To show collection :- show collections
# To create database :- use [databaseName]
# To create collection :- db.[collection_name].insert({name :'laptop', price : 50000}) or db.createCollection("techers")

# To drop database :- db.dropDatabase()
# To drop single collection :- db.[collection_name].drop()

# $$ROOT :- Reference to the current document being processed in the pipeline, which represents the complete document.

# syntax of group :- $group : {_id : expression,field1 : expression , field2 : expression}

# $unwind :- takes an array field and creates a separate document for each element of the array, while keeping all other fields (like _id, customerId, etc.) the same.

# $filter :- if there will be condition , will go for filter ,  $filter : {input : <array_expression>,as :<identifier>,cond : <expression>}

# $bucket :- When you want to categorized into discrete groups based on specified boundary.

# $lookup :- The $lookup is an aggregation pipeline stage that allows you to perform a left outer join between two collections.

# if you specify _id : null in the $group operator, it means that all the documents in the collection will be grouped together in a single group.



## Aggregation operator :-
    .$unwind :- 
    .$group  :-
    .$sort   :-
    .$limit  :-
    .$filter :-
    .$sum    :-
    .$avg    :-
    .$push   :-
    .$addToSet :-
    .$size     :-

    .$lookup   :-  to perform join on two tables.
            syntax :-
                db.collection.aggregate([
                    {
                        $lookup : {
                            from : "foreignCollection",
                            localField : "localField",
                            foreignField : "foreignField",
                            as : "outputArray"
                        }
                    }
                ])
    .$project  :- used to fetch which fields we want.
            syntax :-
                $project : {
                    //Field inclusion or exclusion.
                }

            Ex :- school> db.students.aggregate([{$project : {name:1,age:1,_id:0}}])

    .$bucket   :-
            syntax :- 
                $bucket : {
                    groupBy : <expression>,
                    boundaries : [<boundary1>,<boundary2>,...],
                    default : <expression>,
                    output : {
                        <outputField> : {<accumulator> : <expression>}
                    }
                }

## operators :- 





