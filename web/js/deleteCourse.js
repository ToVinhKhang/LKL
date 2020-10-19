function deleteCourse(id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "id": id });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:4000/course/delete", requestOptions)
        .then(response => response.text())
        .then(result => window.location.reload())
        .catch(error => console.log('error', error));
}