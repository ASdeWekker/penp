// This file will be called by ../weight.js

// Dependencies.
const express = require("express")
const router = express.Router()
const { Client } = require("pg")
const connStr = require("../config/connection").connectionString
const queries = require("../config/queries")

// Connect to a new client.
const client = new Client({ connectionString: connStr })
client.connect()


// Send a message to snooping people.
router.get("/", (req, res) => {
	res.status(200).json({ "message": "You shouldn't be here" })
})

// A route to GET and POST weight.
router.route("/weight")
	.get((req, res) => {
		client.query(queries.getWeightLimit)
			.then(data => {
				res.set("Acces-Control-Allow-Origin", "*")
				console.log(`Fetched ${data.rows.length} rows`)
				console.log(`IP: ${req.connection.remoteAddress}`)
				res.json(data.rows)
			})
			.catch(e => console.error(e.stack))})
	.post((req, res) => {
		let { weight_val, notes } = req.body
		let date = new Date()
		client.query(queries.postWeight, [weight_val, date, notes])
			.then(data => {
				console.log("Inserted data succesfully")
				console.log(`Date: ${date}`)
				console.log(`Weight: ${weight_val}`)
				console.log(`Notes: ${notes}`)
				res.json(data)
			})
			.catch(e => console.error(e.stack))})


module.exports = router
