// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => { // TodoApp is database name which never changed
    if (error) {
        return console.log("Unable to connect to MongoDb Server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db('TodoApp'); //database name always which never changed

    // find one and update
    // db.collection('TodoApp')
    //     .findOneAndUpdate({
    //         _id: new ObjectID('5ae9f0a915bf6811420aa030')
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    // }, {returnOriginal: false})
    // .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('5ae9d1aa15bf6811420a8cf9')
        }, {
            $set: {
                name: "Parth Kakadiya"
            },
            $inc: {
                age: -1
            }
        }, {returnOriginal: false})
        .then((result) => {
            console.log(result);
        });



    client.close();
});

