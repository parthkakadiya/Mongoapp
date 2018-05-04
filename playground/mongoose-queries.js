const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5aecb5fefd1e0c261481f132';

if (!ObjectId.isValid(id)) {
    console.log("Id is not vaild");
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log("Id not Found");
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

User.findById('5ae9d1aa15bf6811420a8cf9').then((user) => {
    if (!user) {
        return console.log("Id not Found");
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));