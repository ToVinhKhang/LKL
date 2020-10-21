function isSigned(courseId, signedCourse) {
  for (let i = 0; i < signedCourse.length; i++) {
    if (courseId === signedCourse[i].course_id) return true;
  }

  return false;
}

function addCourseStatus(course, signedCourse) {
  for (let i = 0; i < course.length; i++) {
    if (isSigned(course[i].id, signedCourse)) course[i]["isSigned"] = true;
    else course[i]["isSigned"] = false;
  }
}

module.exports = {
  addCourseStatus,
};
