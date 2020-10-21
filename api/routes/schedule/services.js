const { Schedule } = require("@models/schedule");
const { v4: uuidv4 } = require("uuid");

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
  deleteSchedule,
  updateSchedule,
};
