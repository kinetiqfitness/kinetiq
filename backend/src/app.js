const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Lets the server read JSON sent in request bodies (used by later endpoints)
app.use(express.json());

// "Are you alive?" check. Used by us now, and by the hosting platform later.
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});