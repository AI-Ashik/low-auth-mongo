const { default: mongoose } = require("mongoose");

const authSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const authModel = mongoose.model("authUser", authSchema);
module.exports = authModel;
