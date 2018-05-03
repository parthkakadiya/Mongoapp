// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
       return console.log("Unable to connect to MongoDb Server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp')

    // inserting data into database

    // db.collection('TodoApp').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to inser to Todo", error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Parth Kakadiya',
    //     Age: 24,
    //     Location: 'Kiel'
    // }, (error, result) => {
    //     if (error) {
    //         console.log("Unable to insert into TodoApp: ", error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});