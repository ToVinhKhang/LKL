const { Schedule } = require("@models/schedule");

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

module.exports = {
  getScheduleByCoursesId,
};
