const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/database')
const User = require('./models/user')
const userRoutes = require('./routes/user')

const app = express();

var cors = require('cors')


app.use(cors())

app.use(bodyParser.json({ extended: false }));

app.use(userRoutes)

sequelize
    .sync()
    .then(result => {
        //console.log(result)
        app.listen(4000);
    })
    .catch(err => {
        console.log(err)
    })