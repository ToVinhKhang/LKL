const { Course } = require("@models/course")


async function getCourseByID(id) {
    return await Course.query().findById(id)
}

async function getCourses(courses) {
    let coursesInfor = []
    for (let i = 0; i < courses.length; i++) {
        course = courses[i]
        courseInfor = await getCourseByID(course.course_id)
        courseInfor.status = course.status
        coursesInfor.push(courseInfor)
    }

    return coursesInfor
}


module.exports = {
    getCourses
};
  