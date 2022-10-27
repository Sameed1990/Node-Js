const mongoose = require("mongoose");

const Users = mongoose.Schema({
   "name": { type: String, required: true },
   "pass": { type: Number, required: true },
   "email": { type: String, required: true },
   "contact": { type: Number }
})

const UserModel = mongoose.model("users", Users);

module.exports = UserModel;