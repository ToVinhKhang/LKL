const { Student } = require("../../db/models/student");
const { User } = require("@models/user");
const { v4: uuidv4 } = require("uuid");
const { hashPassword } = require("@utils/helper");

async function getStudent() {
  const student = await Student.query();

  return {
    student: student,
  };
}

async function deleteStudent(id) {
  const trx = await Student.startTransaction();
  const trx2 = await User.startTransaction();
  try {
    await Student.query().deleteById(id);
    await User.query().deleteById(id);

    trx.commit();
    trx2.commit();

    return { mess: "deleted" };
  } catch (error) {
    trx.rollback();
    trx2.rollback();
    throw error;
  }
}

async function updateStudentInfor(
  id,
  name,
  birth,
  phone,
  CMND,
  address,
  username,
  password
) {
  const trx = await Student.startTransaction();
  const trx2 = await User.startTransaction();
  try {
    await Student.query().findById(id).patch({
      name: name,
      birth: birth,
      phone: phone,
      CMND: CMND,
      address: address,
    });

    if (username !== "...") {
      await User.query().findById(id).patch({
        username: username,
      });
    }

    if (password != "...") {
      password = await hashPassword(password);
      await User.query().findById(id).patch({
        password: password,
      });
    }

    trx.commit();
    trx2.commit();

    return { mess: "updated" };
  } catch (error) {
    trx.rollback();
    trx2.rollback();
    throw error;
  }
}

module.exports = {
  getStudent,
  deleteStudent,
  updateStudentInfor,
};
