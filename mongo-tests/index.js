const app = require("./app")
const start = require("./db")
require("dotenv").config()

const PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
	await start()
	console.log("App is Listening to port:", PORT)
})
