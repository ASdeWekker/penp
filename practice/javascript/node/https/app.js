const app = require("express")
const https = require("https")
const fs = require("fs")

app.get("/", (req, res) => {
	res.send("This is secure")
})

https.createServer({
	key: fs.readFileSync("./key.pem"),
	cert: fs.readFileSync("./cert.pem"),
	passphrase: fs.readFileSync("./secret.txt"),
})