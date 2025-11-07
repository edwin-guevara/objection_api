const { Client } = require("pg");

const client = new Client("postgresql://edwin:19cJz0C40HYbWZwaMR8CCg@framed-knight-9425.jxf.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();