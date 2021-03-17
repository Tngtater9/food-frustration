import { Client } from 'pg';
import createresponse from 'createresponse';

export async function handler() {
	const result = await getFood().then((res) => res);
	return createresponse(200, JSON.stringify(result));
}

async function getFood() {
	const client = new Client({
		host: process.env.PGHOST,
		user: process.env.PGUSER,
		password: process.env.PGPASSWORD,
		database: process.env.PGDATABASE,
	});

	let q = 'select * from food';

	await client.connect();

	const result = await client.query(q);

	client.end();

	return result.rows;
}
