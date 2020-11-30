require('dotenv').config();
const express = require('express'),
      path = require('path'),
      contactCtrl = require('./contactController'),
      { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

//Nodemailer endpoint
app.post('/api/send-email', contactCtrl.sendContact);

app.use(express.static(__dirname + '/../build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));


