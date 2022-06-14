const express = require("express")
const app = express()
const cors = require("cors")
const userRouter = require("./routes/user")

app.use(express.json())
app.use(cors())

app.use("/api/v1/user", userRouter)

module.exports = app
