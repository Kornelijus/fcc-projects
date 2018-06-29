// Date format
// Description:
// https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/date-format

function getDateFormats() {
  var date = new Date();
  var result = [
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  ];
  return result;
}

//Example:
// ['2018-6-14', 'Thursday, June 14, 2018']