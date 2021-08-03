// Constant Variable Sets

const date = new Date();

const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


// Section for the Date Block

let day = date.getDay()

let month = date.getMonth()
let monthName = monthOfYear[month];

let year = date.getFullYear()

document.getElementById("date").textContent = `${monthName} ${day}, ${year}`

// Section for the Time Block

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`;

if (seconds < 10) {
    seconds = `${"0" + seconds}`;  
}

if (minutes < 10) {
    minutes = `${"0" + minutes}`;  
}

if (hours > 12) {
    hours = hours - 12;
    hours = `${"0" + hours}`;

    if (hours === 00) {
        hours = 12;
    }
}

