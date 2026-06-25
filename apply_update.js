import pkg from 'pg';
const { Client } = pkg;
import fs from 'fs';

const connectionString = 'postgresql://postgres:6okpjjE88W1G9LGd@db.rvfeyfhjjxubcumvmqfz.supabase.co:5432/postgres';

async function applyUpdate() {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to database.');

    const sql = fs.readFileSync('update.sql', 'utf8');

    console.log('Executing SQL from update.sql...');
    await client.query(sql);
    console.log('Successfully updated DB.');

  } catch (err) {
    console.error('Error applying schema:', err);
  } finally {
    await client.end();
  }
}

applyUpdate();
