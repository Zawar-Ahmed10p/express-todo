const mongoRepo = require("../repositories/mongo");


exports.addUser = async (data) => {
  if (data) {
    users = await mongoRepo.addUser(data);
    if (users) {
      return users;
    }
    else {
      return false;
    }
  }
};


exports.authenticate = async (data) => {
    if (data) {
      users = await mongoRepo.authenticate(data);
      if (users) {
        return users;
      }
      else {
        console.log(false)
        return false;
      }
    }
  };