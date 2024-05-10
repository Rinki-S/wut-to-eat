const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

app.get('/data', async (req, res) => {
  const client = new Client({
    host: 'db-proxy.teable.cn',
    port: 15433,
    database: 'postgres',
    user: 'read_only_role_bse2m78vQfz7wjn6hIB',
    password: 'l5zmln0REZRILs0DKMSyS',
  });

  await client.connect();

  try {
    const result = await client.query('SELECT * FROM mytable LIMIT 1');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error occurred');
  } finally {
    await client.end();
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
