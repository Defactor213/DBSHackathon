const mongoose = require("mongoose");

// userSchema
const userSchema = new mongoose.Schema({
	id: Number,
	username: String,
	password: String,
	accessLevel: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
