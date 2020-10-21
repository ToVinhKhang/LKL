var express = require("express");
var router = express.Router();
const { getStudent, deleteStudent, updateStudentInfor } = require("./services");

router.get("/", async (req, res, ext) => {
  res.send(await getStudent());
});

router.post("/delete", async (req, res, ext) => {
  res.send(await deleteStudent(req.body.id));
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
    await updateStudentInfor(
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
