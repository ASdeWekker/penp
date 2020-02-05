const { Client } = require("pg")
require("dotenv").config({ path: "/var/www/html/backup/projects/weight/1-public/.env" })
const query = `
create table if not exists weight (
	id serial primary key not null,
	weight varchar(5) not null,
	date varchar(10) not null,
	notes varchar(255))
`

const connStr = "postgres://" + process.env.PSQLU + ":" + process.env.PSQLW + "@192.168.1.90:5432/weight"
const client = new Client({ connectionString: connStr })
client.connect()
client.query(query).then(data => {
	console.log(data)
	client.end()
}).catch( e=> {
	console.error(e.stack)
	client.end()
})
