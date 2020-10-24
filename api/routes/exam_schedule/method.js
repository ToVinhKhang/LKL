const { ExamSchedule } = require("@models/exam_schedule");

async function getExamScheduleByCoursesId(courses) {
  let exam_schedule_list = [];

  for (var i = 0; i < courses.length; i++) {
    const course_id = courses[i].id;
    const examSchedule = await ExamSchedule.query().where('course_id', course_id)

    if (examSchedule.length !== 0) exam_schedule_list = [...exam_schedule_list,...examSchedule];
  }

  return exam_schedule_list;
  
}

module.exports = {
  getExamScheduleByCoursesId,
};
