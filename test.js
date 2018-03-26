// test.js
require('./server.js'); // which executes 'mongoose.connect()'

var mongoose = require('mongoose');
console.log(mongoose.connection.readyState);

// Output - 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting