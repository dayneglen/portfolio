require('dotenv').config();
const express = require('express'),
      contactCtrl = require('./contactController'),
      { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

//Nodemailer endpoint
app.post('/api/send-email', contactCtrl.sendContact);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));


