var courseList;

function getCourse() {
  var requestOptions = {
    method: "GET",
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
                <span class="btn-x" style="color: rgb(245, 108, 45);">
                    <i class="mdi mdi-clipboard-edit-outline"></i>
                    Đăng ký
                </span>
            </td>
        `;
    var courseHTMLDIV = document.createElement("tr");
    courseHTMLDIV.innerHTML = courseHTML;
    courseTable.append(courseHTMLDIV);
  }
}
