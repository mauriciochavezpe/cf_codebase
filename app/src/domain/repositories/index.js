const User = require('./User.repository');
const Task = require('./Task.repository');
require('dotenv').config()
module.exports = {
    "User": new User({"schema":process.env.SCHEMA,"table":"USUARIOS"})
}