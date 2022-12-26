const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user = new schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  typecast: {
    type: String,
    require: true,
  },
});

var Model = mongoose.model("user", user);
module.exports = Model;
