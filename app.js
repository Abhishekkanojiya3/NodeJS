<<<<<<< HEAD
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
=======
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database')

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
>>>>>>> a4fb6a83f6a2ec4834c0505c362b1580c9ca7569

sequelize
    .sync()
    .then(result => {
        //console.log(result)
<<<<<<< HEAD
        app.listen(4000);
=======
        app.listen(3000);
>>>>>>> a4fb6a83f6a2ec4834c0505c362b1580c9ca7569
    })
    .catch(err => {
        console.log(err)
    })