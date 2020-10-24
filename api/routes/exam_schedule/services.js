const { ExamSchedule } = require("@models/exam_schedule");
const { v4: uuidv4 } = require("uuid");
const { getCoursesByStudentId } = require("../student_course/services")
const { getExamScheduleByCoursesId } = require("./method")


async function addExamSchedule(
  course_id,
  name,
  room,
  exam_date,
  exam_duration
) {
  const trx = await ExamSchedule.startTransaction();
  try {
    const examSchedule = await ExamSchedule.query().insert({
      id: uuidv4(),
      course_id: course_id,
      name: name,
      room: room,
      exam_date: exam_date,
      exam_duration: exam_duration,
    });

    trx.commit();

    return { examSchedule };
  } catch (error) {
    trx.rollback();
    throw error;
  }
}

async function getExamSchedule() {
  const examSchedule = await ExamSchedule.query();
  return {
    examSchedule: examSchedule,
  };
}

async function getExamScheduleById(student_id) {
  const courses = await getCoursesByStudentId(student_id)
  const examSchedule = await getExamScheduleByCoursesId(courses['courses'])
  
  return {
    examSchedule: examSchedule,
  };
}

async function deleteExamSchedule(id) {
  await ExamSchedule.query().deleteById(id);
  return { mess: "deleted" };
}

async function updateExamSchedule(
  id,
  course_id,
  name,
  room,
  exam_date,
  exam_duration
) {
  await ExamSchedule.query().findById(id).patch({
    course_id: course_id,
    name: name,
    room: room,
    exam_date: exam_date,
    exam_duration: exam_duration,
  });

  return { mess: "updated" };
}

module.exports = {
  addExamSchedule,
  getExamSchedule,
  getExamScheduleById,
  deleteExamSchedule,
  updateExamSchedule,
};
