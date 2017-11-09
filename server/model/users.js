let mongoose = require('mongoose');

// define the movieSchema model schema
let UserSchema = mongoose.Schema;
const user = new UserSchema({
    userName: String,
    loginName: String,
    passWord: String,
    emailID: String
});

module.exports = mongoose.model('user', user);
