const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = 'TESTING WEBHOOKS';

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/webhooks', (req, res) => {
    console.log('Received webhook request:');
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log('Running app ' + APP_NAME + ' on port ' + PORT + '...');
});
