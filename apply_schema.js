import pkg from 'pg';
const { Client } = pkg;
import fs from 'fs';

const connectionString = 'postgresql://postgres:6okpjjE88W1G9LGd@db.rvfeyfhjjxubcumvmqfz.supabase.co:5432/postgres';

async function applySchema() {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to database.');

    // Read the SQL setup file
    const markdown = fs.readFileSync('supabase_setup.md', 'utf8');
    
    // Extract SQL block
    const sqlMatch = markdown.match(/```sql([\s\S]*?)```/);
    if (!sqlMatch) {
      throw new Error("Could not find SQL block in supabase_setup.md");
    }
    const sql = sqlMatch[1].trim();

    console.log('Executing SQL...');
    await client.query(sql);
    console.log('Successfully created tables and policies.');

  } catch (err) {
    console.error('Error applying schema:', err);
  } finally {
    await client.end();
  }
}

applySchema();
