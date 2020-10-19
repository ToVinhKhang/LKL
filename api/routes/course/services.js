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

async function deleteNotify(id) {
  await Notify.query().deleteById(id);

  return { mess: "deleted" };
}

module.exports = {
  getCourse,
  addCourse,
  deleteNotify,
};
