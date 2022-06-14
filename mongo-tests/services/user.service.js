const User = require("../model/user")

const addUser = async (name, lastname, company) => {
	const user = new User()
	user.name = name
	user.lastname = lastname
	user.company = company
	return await user.save()
}

const getUser = async () => {
	return await User.find()
}
const getUserById = async (id) => {
	return await User.findById(id)
}
const deleteUser = async (userID) => {
	return await User.deleteOne(userID)
}

module.exports = { addUser, getUser }
