var express = require("express");
var router = express.Router();

const auth = require("@middlewares/auth");
const { loginSchema } = require("./validator");
const { login, logout, signIn } = require("./services");

router.get("/", function (req, res, next) {
  return res.send({
    mess: "ok user",
  });
});

router.post("/login", async function (req, res, next) {
  try {
    const username = req.body.username
    const password = req.body.password

    return res.send(await login(username, password));
  } catch (error) {
    return next(error);
  }
});

router.post("/logout", [auth], async function (req, res, next) {
  try {
    const data = {
      user: req.user,
      token: req.token,
    };

    await logout(data);

    return res.end();
  } catch (error) {
    return next(error);
  }
});

router.post("/signin", async function (req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const role = "student";

    const detail = {
      name: req.body.name,
      phone: req.body.phone,
      birth: req.body.birth,
      address: req.body.address,
      idnum: req.body.idnum,
    };

    return res.send(await signIn(username, password, role, detail));
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
