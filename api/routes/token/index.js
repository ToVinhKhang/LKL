var express = require('express');
var router = express.Router();
const { getNotify, postNotify, deleteNotify } = require('./services');

router.get("/", async (req, res, ext) => {
  res.send(await getNotify ()) 
})

router.post("/post", async (req, res, ext) => {
  console.log(req.body)
  res.send(await postNotify (req.body.title, req.body.content)) 
})

router.post("/delete", async (req, res, ext) => {
  res.send(await deleteNotify (req.body.id)) 
})

module.exports = router;