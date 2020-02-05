// Dependencies.
const express = require("express")
const router = express.Router()
require("dotenv").config({ path: "/var/www/html/backup/projects/weight/1-public/.env" })
const { Pool } = require("pg")

// Connection URI.
const connStr = "postgresql://" + process.env.PSQLU + ":" + process.env.PSQLW + "@192.168.1.90:5432/weight"
// Connect to a new pool.
const pool = new Pool({ connectionString: connStr })
pool.connect()
// Query.
const getQuery = "select * from weight order by date desc"
const postQuery = "insert into weight (weight, date, notes) values ($1, $2, $3)"

// Get the one and only page.

// Home page.
router.get("/", (req, res, next) => {
	pool.query(getQuery).then(data => {
		res.render("index", { data: data })
	}).catch(e => console.error(e.stack))
})

router.post("/", (req, res, next) => {
	let { weight, date, notes } = req.body
	rearrangedDate = date.split("-")
	date = rearrangedDate[2] + "-" + rearrangedDate[1] + "-" + rearrangedDate[0]
	pool.query(postQuery, [weight, date, notes]).then(data => {
		res.redirect("/")
	}).catch(e => console.error(e.stack))
})

router.route("/")
	.get((req, res) => {
		pool.query(getQuery).then(data => {
			res.render("index", { data: data })
		}).catch(e => console.error(e.stack))
	}).post((req, res) => {
		let { weight, date, notes } = req.body
		rearrangedDate = date.split("-")
		data = rearrangedDate[2] + "-" + rearrangedDate[1] + "-" + rearrangedDate[0]
		pool.query(postQuery, [weight, date, notes]).then(data => {
			res.redirect("/")
		}).catch(e => console.error(e.stack))
	})

module.exports = router