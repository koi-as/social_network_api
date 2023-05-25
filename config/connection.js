const mongoose = require('mongoose'); //require mongoose

mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkdb'); // wrap mongoose around local connection to MongoDb

module.exports = mongoose.connection; // export connection
