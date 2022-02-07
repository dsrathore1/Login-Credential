const Router = require("express").Router();
const appModel = require("../Model/appModel");

Router.get("/", (req, res) => {
    res.send("Hello World");
});

Router.post("/login", (req, res) => {
    const { email, password } = req.body;

    appModel.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.pwd) {
                res.send({ message: "Logged In!!!", user: user });
            } else {
                res.send("Incorrect Password!!!");
            }
        } else {
            res.send({ message: "User not registered" });

        }
    })
});

Router.post("/register", (req, res) => {
    const { email, password } = req.body;

    appModel.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User Already Registered!!!" });
        } else {
            const user = new appModel({
                email: email,
                pwd: password
            });
            user.save(err => {
                if (err) {
                    console.log(err);
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered!!!" })
                }
            }
            );
        }
    });
});

Router.post("/forgetPwd", (req, res) => {
    res.send("Hello");
});

module.exports = Router;