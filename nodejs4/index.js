// Importing the necessary functions
const { format, parseISO } = require('date-fns');

// Parsing a date string
const parsedDate = parseISO('2023-11-11T12:30:00');
console.log(parsedDate);

// Formatting the parsed date
const formattedDate = format(parsedDate, 'yyyy-MM-dd HH:mm:ss');
console.log(formattedDate);
