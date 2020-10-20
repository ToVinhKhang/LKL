const { User } = require("@models/user");
const { Student } = require("@models/student");
const { hashPassword } = require("@utils/helper");
const { v4: uuidv4 } = require("uuid");

async function login({ body }) {
  const trx = await User.startTransaction();
  try {
    user = await User.findByCredentials(
      body.username,
      body.password.toString()
    );

    if (!user) {
      const err = new Error("Login failed! Check authentication credentials");
      err.status = 401;

      throw err;
    }

    if (user.disabled) {
      const err = new Error("Tài khoản người dùng đã bị khóa");
      err.status = 401;

      throw err;
    }

    const token = await user.generateAuthToken(trx, "web");
    trx.commit();

    return { user, token };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

async function logout(data) {
  const trx = await User.startTransaction();
  try {
    await data.user
      .$relatedQuery("user_token", trx)
      .delete()
      .where("token", data.token);
    trx.commit();

    return;
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

async function signIn(username, password, role, detail) {
  const trx = await User.startTransaction();
  try {
    var id = uuidv4();
    password = await hashPassword(password);

    const user = await User.query().insert({
      id: id,
      username: username,
      password: password,
      role: role,
    });

    const student = await Student.query().insert({
      id: id,
      name: detail.name,
      phone: detail.phone,
      birth: detail.birth,
      CMND: detail.idnum,
      address: detail.address,
    });

    trx.commit();

    return { user, student };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

module.exports = {
  login,
  logout,
  signIn,
};
