// Connect to the database server.

// Connection URI.
const connStr = `postgresql://${process.env.PSQLU}:${process.env.PSQLW}@${process.env.PSQLIP}:$${process.env.PSQLPORT}/weight`

module.exports = {
	connectionString: connStr
}
