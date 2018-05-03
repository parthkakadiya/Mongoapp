// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => { // TodoApp is database name which never changed
    if (error) {
        return console.log("Unable to connect to MongoDb Server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp'); //database name always which never changed

    // delete many
    // db.collection('TodoApp')
    //     .deleteMany({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });
    // delete One
    // db.collection('TodoApp')
    //     .deleteOne({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });
    // Find one and Delete
    // db.collection('TodoApp')
    //     .findOneAndDelete({ completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Users')
    //     .findOneAndDelete({ Location: "Kiel"})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Users')
    //     .deleteOne({ Location: "Kiel"})
    //     .then((result) => {
    //         console.log(result);
    //     });
    db.collection('Users')
        .deleteMany({ Location: "Kiel"})
        .then((result) => {
            console.log(result);
        });



    client.close();
});

