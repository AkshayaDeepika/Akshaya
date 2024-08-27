const { addDays, subMonths } = require('date-fns');

const currentDate = new Date();
console.log(currentDate);

// Adding 5 days to the current date
const futureDate = addDays(currentDate, 5);

// Subtracting 2 months from the current date
const pastDate = subMonths(currentDate, 2);

console.log('Future Date:', futureDate);
console.log('Past Date:', pastDate);
