var courseList;

function getCourse() {
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
                <div class="d-flex">
                    <div>
                        <i onclick="openFormEdit(${i})" class="mdi mdi-pen l-icon l-icon-md"></i>
                    </div>
                    <div class="l-spacer"></div>
                    <div>
                        <i onclick="makeClickDeleteEvent('${i}')" class="mdi mdi-delete l-icon l-icon-md l-fill-red"></i>
                    </div>
                </div>
            </td>
        `;
    var courseHTMLDIV = document.createElement("tr");
    courseHTMLDIV.innerHTML = courseHTML;
    courseTable.append(courseHTMLDIV);
  }
}
