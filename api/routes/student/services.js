const { Student } = require("../../db/models/student");
const { User } = require("@models/user");
const { v4: uuidv4 } = require("uuid");

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

async function updateCourse(
  id,
  courseName,
  courseDes,
  courseFee,
  courseStartDate,
  courseTeacher
) {
  await Course.query().findById(id).patch({
    course_name: courseName,
    course_des: courseDes,
    course_fee: courseFee,
    course_startdate: courseStartDate,
    course_teacher: courseTeacher,
  });

  return { mess: "updated" };
}

module.exports = {
  getStudent,
  deleteStudent,
};
