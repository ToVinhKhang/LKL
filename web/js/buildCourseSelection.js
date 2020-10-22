var courseList;

function buildCourseSelection() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    student_id: undefined,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/course", requestOptions)
    .then((response) => response.text())
    .then((result) => buildCourse(result))
    .catch((error) => console.log("error", error));
}

function buildCourse(result) {
  courseList = JSON.parse(result)["course"];
  var courseSelect = document.querySelectorAll(".course-selection");
  var courseselectDIV = document.createElement("div");

  for (var i = courseList.length - 1; i >= 0; i--) {
    var course = courseList[i];
    var courseselectHTML = `
            <option value="${course.course_name}" data-course-id="${course.id}">${course.course_name}</option>
        `;
    var courseHTMLDIV = document.createElement("div");
    courseHTMLDIV.innerHTML = courseselectHTML;
    courseselectDIV.append(courseHTMLDIV.firstElementChild);
  }

  for (var s = 0; s < courseSelect.length; s++) {
    var courseSelect_i = courseSelect[s];
    courseSelect_i.innerHTML = courseselectDIV.innerHTML;
  }
}
