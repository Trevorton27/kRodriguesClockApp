function clockTick() {
    const date = new Date();
    const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
 
    let day = date.getDay()
    let dayName = dayOfWeek[day];
    let month = date.getMonth()
    let monthName = monthOfYear[month];
    let year = date.getFullYear()
    
    document.getElementById("date").textContent = `${dayName}, ${monthName} ${day}, ${year}`;

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
    
    document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`;
}

setInterval(clockTick, 1000);



