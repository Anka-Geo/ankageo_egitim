const UserService = require("../services/user.service")

const createUser = async (req, res, next) => {
	try {
		const name = req.body.name
		const lastname = req.body.lastname
		const company = req.body.company
		const user = await UserService.addUser(name, lastname, company)
		res.status(201).json({
			success: true,
			user: user,
		})
	} catch (error) {
		next(error)
	}
}

const listUser = async (req, res, next) => {
	const users = await UserService.getUser()
	res.status(200).json({
		success: true,
		user: users,
	})
}

module.exports = { createUser, listUser }
