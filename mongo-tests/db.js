const mongoose = require("mongoose")

const start = async () => {
	if (!process.env.MONGO_URI) {
		throw new Error("auth DB_URI must be defined")
	}
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log("Server connected to MongoDb!")
	} catch (err) {
		console.error(err)
	}
}

module.exports = start
