const User = require('../models/user')

exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    User.create({
            name: name,
            email: email,
            number: number
        })
        .then((result) => {
            console.log(result);
            res.json(result)
        })
}

exports.getUser = (req, res, next) => {
    User.findAll()
        .then((result) => {
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
        .then((user) => {
            console.log("Deleted User :", user);
            user.destroy()
        })
        .then(() => {
            res.json({})
        })
}

exports.putEditUser = (req, res, next) => {
    const userId = req.params.userId;

    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    console.log("//////////////////", userId, name, email)
    User.findByPk(userId)
        .then(user => {
            user.name = name;
            user.email = email;
            user.number = number;
            return user.save();
        })
        .then(() => {
            res.json({})
        })
}