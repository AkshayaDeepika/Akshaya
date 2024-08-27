const { differenceInDays, differenceInHours, getHours } = require('date-fns');

const startDate = new Date('2023-11-01');
const endDate = new Date('2023-11-11T12:30:00');

// Difference in days between two dates
const daysDifference = differenceInDays(endDate, startDate);

// Difference in hours between two dates
const hoursDifference = differenceInHours(endDate, startDate);


console.log('Days Difference:', daysDifference);
console.log('Hours Difference:', hoursDifference);
