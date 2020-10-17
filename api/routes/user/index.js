var express = require('express');
var router = express.Router();


const auth = require('@middlewares/auth');
const { loginSchema } = require('./validator');
const { login, logout } = require('./services');

router.get('/', function(req, res, next) {
  return res.send({
    mess: 'ok user'
  })
})


router.post('/login', [loginSchema], async function (req, res, next) {
    try {
      const data = {
        body: req.body,
      };
      return res.send(await login(data));
    } catch (error) {
      return next(error);
    }
});


router.post('/logout', [auth], async function (req, res, next) {
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
  

module.exports = router;
