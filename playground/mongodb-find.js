// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => { // TodoApp is database name which never changed
    if (error) {
        return console.log("Unable to connect to MongoDb Server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp') //database name always which never changed

    // fetch data from database

    // db.collection('TodoApp') // table name into database
    //     .find({_id: new ObjectID("5ae9bfd24d004e297cbc4e67")})
    //     .toArray()
    //     .then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log("Unable to fetch data from DB", error);
    // });

    // db.collection('TodoApp') // table name into database
    //     .find({})
    //     .count()
    //     .then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (error) => {
    //     console.log("Unable to fetch data from DB", error);
    // });

    db.collection('Users') // table name into database
        .find({name: 'Parth Kakadiya'})
        .toArray()
        .then((docs) => {
        console.log("Hey Parth, Here is your data:");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log("Unable to fetch data from DB", error);
    });

    // client.close();
});