const { StudentCourse } = require("../../db/models/student_course");
const { v4: uuidv4 } = require("uuid");
const { getCourses } = require("./methods");

async function getCoursesByStudentId(student_id) {
  const trx = await StudentCourse.startTransaction();
  try {
    const courses = await StudentCourse.query().where("student_id", student_id);

    coursesInfor = await getCourses(courses);

    trx.commit();

    return {
      courses: coursesInfor,
    };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

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

async function deleteStudentCourse(student_id, course_id) {
  const trx = await StudentCourse.startTransaction();
  try {
    await StudentCourse.query()
      .delete()
      .where("student_id", student_id)
      .where("course_id", course_id);

    trx.commit();

    return {
      mess: "deleted",
    };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

module.exports = {
  addStudentCourse,
  deleteStudentCourse,
  getCoursesByStudentId,
};
