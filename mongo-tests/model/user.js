const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema(
	{
		name: {
			type: String,
		},
		lastname: {
			type: String,
		},
		status: {
			type: String,
			enum: ["active", "passive"],
			default: "passive",
		},
		company: {
			type: String,
		},
		geom: {
			type: String,
		},
	},
	{ timestamps: true } // optional, maybe used for logging.
)

// model of the designed schema
const User = mongoose.model("user", UserSchema)

module.exports = User
