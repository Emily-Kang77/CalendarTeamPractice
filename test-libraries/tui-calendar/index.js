
const Calendar = require('./dist/tui-calendar.js');
//require('./node_modules/@toast-ui/calendar/dist/toastui-calendar.css');

let container = document.getElementById('calendar');
// gets the div with id  "calendar" from html file


const options = {
  defaultView: 'month',
};

// make Calendar object called calendar
let calendar = new Calendar(container, options);
