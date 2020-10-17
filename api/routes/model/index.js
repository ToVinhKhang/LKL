var express = require('express');
var router = express.Router();
const { getName } = require('./services');

router.get("/", async (req, res, ext) => {
  res.send(await getName ()) 
})

module.exports = router;