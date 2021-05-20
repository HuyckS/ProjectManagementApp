const config = require("../config/auth.config");
const User = require('../models/User');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
    // Save User to Database
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 8),
        roles: req.body.roles,
    })
        .then(user => {
            res.send({ message: "User was registered successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: user.roles,
                accessToken: token

            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};