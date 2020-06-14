const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

  _id: String,
  names: Array

});

module.exports = model("users", UserSchema);