const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('hello this is zainab zafar 210658, and i am giving my VSS lab mid '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
