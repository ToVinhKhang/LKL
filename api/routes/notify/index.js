var express = require('express');
var router = express.Router();
const { getNotify, postNotify } = require('./services');

router.get("/", async (req, res, ext) => {
  res.send(await getNotify ()) 
})

router.post("/post", async (req, res, ext) => {
  console.log(req.body)
  res.send(await postNotify (req.body.title, req.body.content)) 
})

module.exports = router;