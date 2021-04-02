const express = require('express');
const router = require('./router/itemRouter');

require('./config/dbConnect');

const app = express();
app.use(express.json());

app.use('/items', router);

app.listen(8080, () => console.log('Server up and running!'));
