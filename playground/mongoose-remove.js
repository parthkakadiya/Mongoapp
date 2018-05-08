const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });
//
// Todo.findOneAndRemove('5af18cf0a1917a54ee866cb4').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id: ''}).then((todo) => {
    console.log(todo);
});