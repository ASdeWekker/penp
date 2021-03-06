// This is a file for the queries used.

// Queries.
const getWeight = "select id,weight_val,date,notes from weight order by date desc"
const postWeight = "insert into weight (weight_val, date, notes) values ($1, to_timestamp($2, 'YYYY-MM-DDThh24:mi:ssZ'), $3)"
const getWeightLimit = "select id,weight_val,date,notes from weight order by date desc limit 10"

module.exports = {
	getWeight: getWeight,
	postWeight: postWeight,
	getWeightLimit: getWeightLimit
}
