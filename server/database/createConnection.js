import db from "./connection.js"
import dotenv from 'dotenv/config'


// DDL

await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
); `);


const username = process.env.USERNAME1;
const password = process.env.PASSWORD1;

console.log(username)
console.log(password)




await db.exec(`INSERT INTO users (username, password) VALUES (?,?)`, [username, password]);
const users = await db.all(`SELECT * FROM users`)





