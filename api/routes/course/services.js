const { Course } = require("../../db/models/course");
const { v4: uuidv4 } = require("uuid");

async function getCourse() {
  const course = await Course.query();

  return {
    course: course,
  };
}

async function addCourse(courseName, courseDes, courseFee, courseStartDate, courseTeacher) {
  const course = await Course.query().insert({
    id: uuidv4(),
    course_name: courseName,
    course_des: courseDes,
    course_fee: courseFee,
    course_startdate: courseStartDate,
    course_teacher: courseTeacher,
  });

  return course;
}

async function deleteCourse(id) {
  await Course.query().deleteById(id);

  return { mess: "deleted" };
}

async function updateCourse(id, courseName, courseDes, courseFee, courseStartDate, courseTeacher) {
  await Course.query().findById(id)
  .patch({
    course_name: courseName,
    course_des: courseDes,
    course_fee: courseFee,
    course_startdate: courseStartDate,
    course_teacher: courseTeacher,
  });

  return { mess: "updated" };
}

module.exports = {
  getCourse,
  addCourse,
  deleteCourse,
  updateCourse
};
