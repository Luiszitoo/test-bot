const mongoose = require('mongoose');
const User = require('./user');

async function connect() {

  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tomato', {

    useNewUrlParser: true,
    useUnifiedTopology: true

  });

}

async function findById(id) {

  return await User.findById(id);

}

async function allUsers() {

  return await User.find({});

}

async function saveUser(user) {

  if (!user) {
    console.log(`Invalid user: ${user}`);
    return;
  }

  if (!user._id) {
    console.log(`User doesn't contain ID: ${user}`);
    return;
  }

  let filter = { _id: user._id };

  if (await User.exists(filter)) {
    return await User.findOneAndUpdate(filter, user);
  }

  await User.insertMany(user);

}

module.exports = {

  connect: connect,
  findById: findById,
  allUsers: allUsers,
  saveUser: saveUser

};