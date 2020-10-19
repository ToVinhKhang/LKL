function getNofity() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:4000/notify", requestOptions)
    .then((response) => response.text())
    .then((result) => buildNotify(result))
    .catch((error) => console.log("error", error));
}

var notifList

function buildNotify(result) {
    var notifTable = document.querySelector("#notify-list")
    notifList = JSON.parse(result)["notify"]
    for (var i = notifList.length - 1; i >= 0; i--) {
        var notif = notifList[i]
        var notifyHTML = `
            <td>
                <div onclick="setNotifyToLocalStorage('${i}')" style="cursor: pointer">
                    ${notif.title}
                </div>
            </td>
            <td>
                ${notif.post_date}
            </td>
        `
        var notifyHTMLDIV = document.createElement('tr')
        notifyHTMLDIV.innerHTML = notifyHTML
        notifTable.append(notifyHTMLDIV)
    }
}


function setNotifyToLocalStorage(notification_idx) {
    localStorage.setItem('title', notifList[notification_idx].title);
    localStorage.setItem('content', notifList[notification_idx].notification_content);
    localStorage.setItem('post_date', notifList[notification_idx].post_date);
    window.location.href = "./notifDetail/index.html"
}
