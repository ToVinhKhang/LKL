var express = require("express");
var router = express.Router();
const {
  getTeacher,
  addTeacher,
  deleteTeacher,
  updateTeacherInfor,
} = require("./services");

router.get("/", async (req, res, ext) => {
  res.send(await getTeacher());
});

router.put("/add", async (req, res, ext) => {
  const name = req.body.name;
  const birth = req.body.birth;
  const phone = req.body.phone;
  const CMND = req.body.CMND;
  const address = req.body.address;
  const username = req.body.username;
  const password = req.body.password;

  res.send(
    await addTeacher(name, birth, phone, CMND, address, username, password)
  );
});

router.post("/delete", async (req, res, ext) => {
  res.send(await deleteTeacher(req.body.id));
});

router.post("/update", async (req, res, ext) => {
  var id = req.body.id;
  var name = req.body.name;
  var birth = req.body.birth;
  var phone = req.body.phone;
  var CMND = req.body.CMND;
  var address = req.body.address;
  var username = req.body.username;
  var password = req.body.password;

  res.send(
    await updateTeacherInfor(
      id,
      name,
      birth,
      phone,
      CMND,
      address,
      username,
      password
    )
  );
});

module.exports = router;
