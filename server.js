const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

let existingUsers = ["p diddy", "atharva39", "little kid lover", "aman", "laukik", "robert de niro", "clint_eastwood", "devilmaycry", "horse_ridder", "malehunter"];

app.post('/check-username', (req, res) => {
  const { username } = req.body;
  if (existingUsers.includes(username.toLowerCase())) {
    res.send("Username already taken");
  } else {
    res.send("");
  }
});

app.post('/register', (req, res) => {
  const { username } = req.body;
  if (existingUsers.includes(username.toLowerCase())) {
    return res.send("Username already exists. Try another.");
  }
  existingUsers.push(username.toLowerCase()); // Save new user
  res.send("Successfully Registered");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
