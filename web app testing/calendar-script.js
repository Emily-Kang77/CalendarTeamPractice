const Calendar = require('@toast-ui/calendar');
require('@toast-ui/calendar/dist/toastui-calendar.min.css');

// gets the div with id  "calendar" from html file
const container = document.getElementById('calendar');
const options = {
  defaultView: 'week',
  /*timezone: {
    zones: [
      timezoneName:
    ]
  },*/

  // array made of objects
  calendars: [
    {
      id: 'cal1',
      name: 'Personal',
      backgroundColor: '#03bd9e',
    },
    {
      id: 'cal2',
      name: 'Work',
      backgroundColor: '#00a9ff'
    }

  ]
}

const calendar = new Calendar(container, options);