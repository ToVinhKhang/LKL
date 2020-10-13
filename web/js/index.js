let crrWeekStep = 0


function getWeekDate() {
    var d = 24 * 60 * 60 * 1000
    var curr = new Date; // get current date
    var first = new Date(curr.getTime() - (curr.getDay() - 1) * d + crrWeekStep * 7 * d)
    var last = 	new Date(curr.getTime() - (curr.getDay() - 6 - 1 ) * d + crrWeekStep * 7 * d)
    
    var wd = `${first.getDate() < 10? '0':''}${first.getDate()}/${first.getMonth() + 1 < 10? '0':''}${first.getMonth() + 1}/${first.getFullYear()}`
        + ' - ' +
        `${last.getDate() < 10? '0':''}${last.getDate()}/${last.getMonth() + 1 < 10? '0':''}${last.getMonth() + 1}/${last.getFullYear()}`

    document.getElementById("show-date").innerText = wd
    // TODO: send rq
}

getWeekDate()

function preWeek() {
    crrWeekStep--
    getWeekDate()
}

function nextWeek() {
    crrWeekStep++
    getWeekDate()
}

Previous.onclick = () => {
    preWeek()
}

Next.onclick = () => {
    nextWeek()
}