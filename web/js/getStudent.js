function getStudent() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:4000/student", requestOptions)
    .then((response) => response.text())
    .then((result) => buildStudent(result))
    .catch((error) => console.log("error", error));
}

var studentList;

function buildStudent(result) {
  var studentTable = document.querySelector("#student-list");
  studentList = JSON.parse(result)["student"];
  for (var i = studentList.length - 1; i >= 0; i--) {
    var student = studentList[i];
    var studentHTML = `
            <td>${student.name}</td>
            <td>${student.CMND}</td>   
            <td>${student.birth}</td>                     
            <td>${student.phone}</td>
            <td>${student.address}</td>    
            <td>
                <div class="d-flex">
                    <div>
                        <i onclick="openFormEdit()" class="mdi mdi-pen l-icon l-icon-md"></i>
                    </div>
                    <div class="l-spacer"></div>
                    <div>
                        <i onclick="handleConfirmDelete(${i})" class="mdi mdi-delete l-icon l-icon-md l-fill-red"></i>
                    </div>
                </div>
            </td>
        `;
    var studentHTMLDIV = document.createElement("tr");
    studentHTMLDIV.innerHTML = studentHTML;
    studentTable.append(studentHTMLDIV);
  }
}
