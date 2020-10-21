var courseList;

function getCourse(student_id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    student_id: student_id,
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
  var courseTable = document.querySelector("#course-list");
  courseList = JSON.parse(result)["course"];
  for (var i = courseList.length - 1; i >= 0; i--) {
    var course = courseList[i];
    var courseHTML = `
            <td style="min-width:200px; max-width: 250px;">
                ${course.course_name}
            </td>
            <td style="min-width:350px; max-width: 400px;">
                ${course.course_des}    
            </td>
            <td>
                ${course.course_fee}
            </td>
            <td>
                ${course.course_startdate}
            </td>
            <td>
                ${course.course_teacher}
            </td>
            <td>
                ${
                course.isSigned?
                `<span class="btn-x noselect" style="color: rgb(255 0 0);" onclick="handleCancelSignIn(${i})">
                    <i class="mdi mdi-delete"></i>
                    Hủy
                </span>`
                :
                `<span class="btn-x noselect" style="color: rgb(21 160 47);" onclick="handleCourseSignIn(${i})">
                    <i class="mdi mdi-clipboard-edit-outline"></i>
                    Đăng ký
                </span>`
                }
            </td>
        `;
    var courseHTMLDIV = document.createElement("tr");
    courseHTMLDIV.innerHTML = courseHTML;
    courseTable.append(courseHTMLDIV);
  }
}
