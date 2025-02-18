let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    let timeString = `${hours}:${minutes}:${seconds}`;

    if (!is24HourFormat) {
        const period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        timeString = `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${period}`;
    } else {
        timeString = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
    }

    document.getElementById("clock").textContent = timeString;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

setInterval(updateClock, 1000);
updateClock();
