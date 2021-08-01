const date = new Date();

let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()

document.getElementById("date").textContent = `${month} / ${day} / ${year}`

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

if (seconds < 10) {
    seconds = "0" + date.getSeconds();  
}

if (minutes < 10) {
    minutes = "0" + date.getMinutes();  
}

// if (hours < 10) {
//     hours = "0" + date.getHours();  
// }

document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`