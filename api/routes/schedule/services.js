const { Schedule } = require("@models/schedule");
const { v4: uuidv4 } = require("uuid");
const { getCoursesByStudentId } = require("../student_course/services")
const { getScheduleByCoursesId, getCoursesByTeacherId } = require("./method")

async function addSchedule(courseId, name, room, week_date, duration, week) {
  const trx = await Schedule.startTransaction();
  try {
    const schedule = await Schedule.query().insert({
      id: uuidv4(),
      course_id: courseId,
      name: name,
      room: room,
      week_date: week_date,
      duration: duration,
      week: week,
    });

    trx.commit();

    return { schedule };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

async function getSchedule(week) {
  const schedule = await Schedule.query().where("week", week);
  return {
    schedule: schedule,
  };
}

async function getScheduleByStudentId(week, student_id) {
  const courses = await getCoursesByStudentId(student_id)
  const schedule = await getScheduleByCoursesId(week, courses['courses'])

  return {
    schedule: schedule,
  };
}

async function getScheduleByTeacherId(week, teacher_id) {
  const courses = await getCoursesByTeacherId(teacher_id)
  const schedule = await getScheduleByCoursesId(week, courses)

  return {
    schedule: schedule,
  };
}

async function deleteSchedule(id) {
  await Schedule.query().deleteById(id);
  return { mess: "deleted" };
}

async function updateSchedule(
  id,
  courseId,
  name,
  room,
  week_date,
  duration
) {
  await Schedule.query().findById(id).patch({
    course_id: courseId,
    name: name,
    room: room,
    week_date: week_date,
    duration: duration,
  });

  return { mess: "updated" };
}

module.exports = {
  addSchedule,
  getSchedule,
  getScheduleByStudentId,
  getScheduleByTeacherId,
  deleteSchedule,
  updateSchedule,
};
