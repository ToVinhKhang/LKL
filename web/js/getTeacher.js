function getTeacher() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    fetch("http://localhost:4000/teacher", requestOptions)
      .then((response) => response.text())
      .then((result) => buildTeacher(result))
      .catch((error) => console.log("error", error));
  }
  
  var teacherList;
  
  function buildTeacher(result) {
    var teacherTable = document.querySelector("#teacher-list");
    teacherList = JSON.parse(result)["teacher"];
    for (var i = teacherList.length - 1; i >= 0; i--) {
      var teacher = teacherList[i];
      var teacherHTML = `
              <td>${teacher.name}</td>
              <td>${teacher.CMND}</td>   
              <td>${teacher.birth}</td>                     
              <td>${teacher.phone}</td>
              <td>${teacher.address}</td>    
              <td>
                  <div class="d-flex">
                      <div>
                          <i onclick="handleOpenFormEditTeacherInfor(${i})" class="mdi mdi-pen l-icon l-icon-md"></i>
                      </div>
                      <div class="l-spacer"></div>
                      <div>
                          <i onclick="handleConfirmDelete(${i})" class="mdi mdi-delete l-icon l-icon-md l-fill-red"></i>
                      </div>
                  </div>
              </td>
          `;
      var teacherHTMLDIV = document.createElement("tr");
      teacherHTMLDIV.innerHTML = teacherHTML;
      teacherTable.append(teacherHTMLDIV);
    }
  }
  