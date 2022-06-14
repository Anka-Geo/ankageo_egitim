const router = require("express").Router()
const controller = require("../controller/user.controller")

router.post("/", controller.createUser)
router.get("/", controller.listUser)
router.get("/test", (req, res) => {
	res.send("test is working")
})

module.exports = router
