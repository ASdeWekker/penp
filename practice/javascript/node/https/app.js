const express = require("express")
const https = require("https")
const fs = require("fs")

const app = express()
const port = 3000

const options = {
	cert: fs.readFileSync("./.ssl-certs/fullchain.pem", "utf8"),
	key: fs.readFileSync("./.ssl-certs/privkey.pem", "utf8"),
}


app.get("/", (req, res) => {
	res.send("This is secure")
})

app.get("/health-check", (req, res) => {
	res.sendStatus(200)
})


app.listen(port)
