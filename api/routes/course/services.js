const { Course } = require("../../db/models/course");
const { StudentCourse } = require("../../db/models/student_course");
const { addCourseStatus } = require("./method");
const { v4: uuidv4 } = require("uuid");

async function getCourse(student_id) {
  const course = await Course.query();

  if (student_id) {
    const signedCourse = await StudentCourse.query().where(
      "student_id",
      student_id
    );
    addCourseStatus(course, signedCourse);
  }

  return {
    course: course,
  };
}

async function addCourse(
  courseName,
  courseDes,
  courseFee,
  courseStartDate,
  courseTeacher,
  teacherId
) {
  const course = await Course.query().insert({
    id: uuidv4(),
    course_name: courseName,
    course_des: courseDes,
    course_fee: courseFee,
    course_startdate: courseStartDate,
    course_teacher: courseTeacher,
    teacher_id: teacherId,
  });

  return course;
}

async function deleteCourse(id) {
  await Course.query().deleteById(id);

  return { mess: "deleted" };
}

async function updateCourse(
  id,
  courseName,
  courseDes,
  courseFee,
  courseStartDate,
  courseTeacher,
  teacherId
) {
  await Course.query().findById(id).patch({
    course_name: courseName,
    course_des: courseDes,
    course_fee: courseFee,
    course_startdate: courseStartDate,
    course_teacher: courseTeacher,
    teacher_id: teacherId,
  });

  return { mess: "updated" };
}

module.exports = {
  getCourse,
  addCourse,
  deleteCourse,
  updateCourse,
};
