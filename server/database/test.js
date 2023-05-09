import db from "./connection.js"


async function testConnection() {
  try {
    const rows = await db.all('SELECT * FROM users');
    console.log(rows);
  } catch (err) {
    console.error(err.message);
  } finally {
    db.close();
  }
}

testConnection();
