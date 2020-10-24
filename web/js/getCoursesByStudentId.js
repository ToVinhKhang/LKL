function getCoursesByStudentId(student_id, buildFunction) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ student_id: student_id });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:4000/student_course/getcourse", requestOptions)
    .then((response) => response.text())
    .then((result) =>  {
      if (!buildFunction) {
        buildCourse(result)
      } else {
        buildFunction(result)
      }
    })
    .catch((error) => console.log("error", error));
}

function buildCourse(result) {
  var courseTable = document.querySelector("#course-list");
  courseList = JSON.parse(result)["courses"];
  for (var i = courseList.length - 1; i >= 0; i--) {
    var course = courseList[i];
    var courseHTML = `
            <td>${course.course_name}</td>
            <td>${course.course_fee}</td>
            <td>
              ${course.status?'Đã đóng': 'Chưa đóng'}
            </td>
          `;
    var courseHTMLDIV = document.createElement("tr");
    courseHTMLDIV.innerHTML = courseHTML;
    courseTable.append(courseHTMLDIV);
  }
}
