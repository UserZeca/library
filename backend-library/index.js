'use strict'
const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user-routes');
const bookRoutes = require('./routes/book-routes');

const app = express();

app.use(express.json());

//app.use((req, res, next))

app.use(cors());
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));


app.use('/api', userRoutes.routes);
app.use('/api', bookRoutes.routes);

app.listen(config.port, () => console.log(`App is running on port ${config.port}`));
