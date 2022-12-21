# CalendarTeamPractice

Upload practice code here for accountability purposes and practice.

# calendar
This is the repo for the calendar team!
# What is it?

A calendar web app based on tui-calendar, or possibly full-calendar libraries.
We're still deciding on which. The full-calendar library is in CommonJS so it doesn't need
Browserify or any other solution to show JS in the browser.
However, it may have less features.

# How to test with tui-calendar?

## Required dependencies

`npm install node @toast-ui/calendar tui-code-snippets browserify`

Browserify is used to convert the library files in ES to Common in one big JS file so
the JS shows up in the browser. The HTML script source is this new file.

## How to make the calendar show up

After making your changes, enter:
`browserify <script>.js -o bundle.js`

And in the HTML:
`<script src="bundle.js"></script>`

# How to test with full-calendar?

Just paste in the HTML file with online sources.

