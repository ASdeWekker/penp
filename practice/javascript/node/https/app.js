const app = require("express")()
const https = require("https")
const fs = require("fs")

const port = 3001

app.get("/", (req, res) => {
	res.send("This is secure")
})

https.createServer({
	key: fs.readFileSync("./key.pem", "utf8"),
	cert: fs.readFileSync("./cert.pem", "utf8"),
	passphrase: process.env.JWTSECRETKEY,
}, app)
	.listen(port, () => console.log(`App is listening on port ${port}`))
