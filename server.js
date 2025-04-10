const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());

let users = [];
const colleges = ["VESIT", "VJTI", "IIT Bombay", "SPIT", "DJ Sanghvi", "KJ Somaiya", "Thadomal Shahani"];

app.get('/usernames', (req, res) => {
  const usernames = users.map(user => user.username);
  res.json(usernames);
});

app.get('/suggest-college', (req, res) => {
  const query = req.query.query.toLowerCase();
  const filtered = colleges.filter(c => c.toLowerCase().includes(query));
  res.json(filtered);
});

app.post('/register', (req, res) => {
  const { name, college, username, password } = req.body;
  users.push({ name, college, username, password });
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
