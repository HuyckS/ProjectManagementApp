const { verifyReg } = require("../middleware");
const controller = require("../controllers/auth.controller.js");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/register",
        [
            verifyReg.checkDuplicates
        ],
        controller.register
    );

    app.post("/api/auth/signin", controller.signin);
};