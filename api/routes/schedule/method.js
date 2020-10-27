const { Schedule } = require("@models/schedule");
const { Course } = require("@models/course")

async function getScheduleByCoursesId(week, courses) {
  let schedule_list = [];

  for (var i = 0; i < courses.length; i++) {
    const course_id = courses[i].id;
    const schedule = await Schedule.query()
      .where("week", week)
      .where("course_id", course_id);

    if (schedule.length !== 0) schedule_list = [...schedule_list,...schedule];
  }

  return schedule_list;
}

async function getCoursesByTeacherId(teacherId) {
  const courses = await Course.query().where("teacher_id", teacherId)
  return courses;
}

module.exports = {
  getScheduleByCoursesId,
  getCoursesByTeacherId
};
