const { Teacher } = require("@models/teacher");
const { User } = require("@models/user");
const { v4: uuidv4 } = require("uuid");
const { hashPassword } = require("@utils/helper");

async function getTeacher() {
  const teacher = await Teacher.query();

  return {
    teacher: teacher,
  };
}

async function addTeacher(
  name,
  birth,
  phone,
  CMND,
  address,
  username,
  password
) {
  const trx = await User.startTransaction();
  try {
    var id = uuidv4();
    password = await hashPassword(password);

    const user = await User.query().insert({
      id: id,
      username: username,
      password: password,
      role: 'teacher',
    });

    const teacher = await Teacher.query().insert({
      id: id,
      name: name,
      phone: phone,
      birth: birth,
      CMND: CMND,
      address: address,
    });

    trx.commit();

    return { user, teacher };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

async function deleteTeacher(id) {
  const trx = await Teacher.startTransaction();
  const trx2 = await User.startTransaction();
  try {
    await Teacher.query().deleteById(id);
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

async function updateTeacherInfor(
  id,
  name,
  birth,
  phone,
  CMND,
  address,
  username,
  password
) {
  const trx = await Teacher.startTransaction();
  const trx2 = await User.startTransaction();
  try {
    await Teacher.query().findById(id).patch({
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
  getTeacher,
  addTeacher,
  deleteTeacher,
  updateTeacherInfor,
};
