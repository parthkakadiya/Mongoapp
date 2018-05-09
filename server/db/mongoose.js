const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://pmk:111@ds217560.mlab.com:17560/todoapp'
};
mongoose.connect(db.localhost || db.mlab);

module.exports  = {mongoose};