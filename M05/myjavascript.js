var chooseNum = prompt("Please enter a number between 0-10."); // Ask user to enter value.
var math = parseInt(chooseNum); 
var table = math; // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1; // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message

if (operator === 'multiplication') {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
