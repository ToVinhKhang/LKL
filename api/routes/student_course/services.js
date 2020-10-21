const { StudentCourse } = require("../../db/models/student_course");
const { User } = require("@models/user");
const { v4: uuidv4 } = require("uuid");
const { hashPassword } = require("@utils/helper");

async function addStudentCourse(student_id, course_id) {
  const trx = await StudentCourse.startTransaction();
  try {
    const id = uuidv4();

    const student_course = await StudentCourse.query().insert({
      id: id,
      student_id: student_id,
      course_id: course_id,
    });

    trx.commit();

    return {
      student_course: student_course,
    };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}


module.exports = {
  addStudentCourse,
};
