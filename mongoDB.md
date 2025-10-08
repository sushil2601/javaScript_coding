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

## Indexing :- 

        .Without indexing , we do linear search called COLLSCAN.
        .With indexing, called Indexing scan('IXSCAN').

        .When a query is executed, mongoDB can use the index to quickly locate the documents that match the query by searching through B-tree.

        .When we create an index on the name field in MongoDB, it builds a separate data structure (typically a B-tree) that stores all the values of the name field in sorted order, along with pointers (memory references) to the corresponding documents in the collection.

        .The trade-off :- 1. space storage, 2. write operation

        .There are several type of indexes available in mongodb.

            1. Single field indexes
            2. Compound indexes
            3. Text indexes

# What is explain()?
Ans:-

    .In MongoDB, every query goes through the query planner and execution engine.

    .The explain() method provides detailed information about how MongoDB executes a query, including:

    .Which indexes were used (if any)

        .Number of documents scanned vs returned

        .Query execution stages

        .Whether a collection scan (full scan) was performed

    .It’s mainly used for performance analysis and optimization.

    Ex:- db.students_data.find({age:{$lte : 25}}).explain()

         db.students_data.find({age:{$lte : 25}}).explain("executionStats")

# Single field index

    .To create Indexes :-  db.students_data.createIndex({age : 1})
    .To get Indexes    :-  db.students_data.getIndexes()
    .To drop Indexes   :-  db.students_data.dropIndex("age_1") or ({age : 1})

# When to not use indexing in mongoDB.
Ans:-

    .When the collection is small
    .When the collection is frequently updated
    .When the queries are complex(multiple field)
    .When the collection is large(make less indices)

# compound indexes

    .db.students_data.createIndex({age: 1, gender : 1}) 

    .school> db.students_data.createIndex({age : 1},{unique : true}) // not two person have same name

# Partial filters :- If want to do indexing on age greater than age 22

    .school> db.students_data.createIndex({age : 1},{partialFilterExpression : {age : {$gt : 22}}})

    .school> db.students_data.createIndex({age : 1},{partialFilterExpression : {gender : {$exists : true}}})

    .school> db.students_data.createIndex({"expires" : 1},{expireAfterSeconds : 3600}) // This works on date fileds

# Covered Query
Ans :-

    .A covered query is a query in which,

        .All the fields in the query are part of an index.
        .All the fileds returned in the query are in the same index.

    Ex:- school> db.students_data.find({name : "Neha"},{name : 1, _id : 0}).explain()

# Winning plan
Ans :-

        .multiple index :- name_1, name_1_age_1 

            Ex:- db.collection.find({name:"Marks"}) -> In this case which index is used 

        .In case of multiple indexes,
                .MongoDB checks the performance of index on a sample of documents once the queries is run and set it as winning plan.

                .Then for second query of similar type it doesn't race them again.

                .It store that winning plan in cache.

            Ex:- db.students_data.find({name : "Marks}).explain("allPlansExecution") //allPlansExecution->gives which plans executed.

        .Cache is rest after,
                .After 1000 writes
                .Index is reset
                .Mongo server is restarted
                .Other indexes are manipulated

# Multi-key index
Ans :-

        .A multi-key index is an index that can be created on an array fields.

        .MongoDB will create a separate index entry for each value in each array, so it can quickly look up documents that match a specific value.

        Ex:- school> db.students.createIndex({hobbies : 1})

        .school> db.students.find({},{hobbies : 1,_id : 0}) --> it find all hobbies

# Text index
Ans :-

        .Single Text index per collection
        .Tokenization and stemming
        .Relevance score

        Ex :- school> db.students.createIndex({name : "text",bio : "text"})

        school> db.students.find({$text : {$search : "Experienced"}})

        school> db.students.find({$text : {$search : "teacher maths"}},{name:1,_id:0})

        school> db.students.find({$text : {$search : "teacher Singing"}},{hmaraScore : {$meta : "textScore"}}).limit(2)   --> To see the score.

        school> db.students.find({$text : {$search : "teacher -Singing"}},{hmaraScore : {$meta : "textScore"}}).limit(2)   --> gives those who have techer in bio.

        school> db.students.createIndex({name : "text",bio : "text"},{weights : {name : 10000,bio:1}}) --> To assign priority 

        school> db.students.find({$text : {$search : "teacher -Singing"}},{hmaraScore : {$meta : "textScore"}}).sort({hmaraScore : {$meta : "textScore"}})   --> sort based on score

# To avoid the lock on collection

    .When you create an index using createIndex(), it can lock the collection, which may block other operations temporarily.

    .By default, the background option is false, meaning the collection may be locked during index creation.

    .To avoid locking the entire collection, you can set background: true.

        Ex:- db.students.createIndex({name : "text",bio : "text"},{background : true})

    .In this mode, only queries that depend on the new index may be briefly affected.

    .Other operations can continue without interruption.