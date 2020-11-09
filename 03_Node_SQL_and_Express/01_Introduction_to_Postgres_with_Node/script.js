const { Client } = require('pg');
require('dotenv').config()
const client = new Client({
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT
})

client.connect();

// Write the necessary function to find a student by its id. This function should return the found student.
async function findStudentById(id) {
    try {
        const res = await client.query('SELECT * FROM students WHERE id=($1)', [id])
        console.log(res.rows)
        await client.end()
    } catch(err) {
        console.log(err.message)
    }
}

// findStudentById(1); // Emmanuel

// Write the necessary function to update a student. This function should return the updated student.
async function updateStudentById(newValue, id) {
    try {
        const res = await client.query('UPDATE students SET name=$1 WHERE id=$2 RETURNING *', [newValue, id])
        console.log(res.rows)
        await client.end()
    } catch(err) {
        console.log(err.message)
        await client.end()
    }
}

// updateStudentById('Emmy', 1)


async function deleteStudentsById(id) {
    try {
        const res = await client.query('DELETE FROM students WHERE id=$1 RETURNING *', [id])
        console.log(res.rows);
        await client.end()
    } catch(err) {
        console.log(err)
        await client.end()
    }
}
// deleteStudentsById(2)

// Modify the students table so that null names can not be inserted:
// ALTER TABLE students
// ALTER COLUMN name
// SET NOT NULL;