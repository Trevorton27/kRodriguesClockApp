function displayClock() {
  const time = new Date();

  let hours = time.getHours();
  const minutes = renderLeadingZero(time.getMinutes());
  const seconds = renderLeadingZero(time.getSeconds());
  const isAm = hours < 12 || hours === 0;
  const amPm = isAm ? 'AM' : 'PM';
  document.getElementById('time').textContent = `${formatHour(
    hours
  )} : ${minutes} : ${seconds} ${amPm}`;
}

function renderLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;
  hour = hour === 0 ? hour + 12 : hour;

  return hour;
}

function displayDate() {
  const date = new Date();

  const day = dayOfWeek[date.getDay()];
  const date = date.getDate();
  const month = monthOfYear[date.getMonth()];
  const year = date.getFullYear();

  document.getElementById(
    'date'
  ).textContent = `${dayName}, ${month} ${day}, ${year}`;
}

function appendDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const monthOfYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const dayOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

displayClock();
displayDate();

setInterval(() => {
  displayClock();
  displayDate();
}, 1000);
