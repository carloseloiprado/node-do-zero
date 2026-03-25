import 'dotenv/config'; //ler .env e salvar numa global proces.env

import http from 'node:http';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

// const requestHandler = async (req, res) => {

//     const result = await sql`select * from playing_with_neon`;
//     const { version } = result[0];

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(version);
// };

// http.createServer(requestHandler).listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });

export default sql