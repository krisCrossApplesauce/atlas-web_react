import $ from "jquery";
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
var $btn = $('<button>Click here to get started</button>').appendTo('body');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

let updateCounter = _.debounce(function () {
    count += 1;
    $('#id').text(`${count} clicks on the button`);
}, 500);

$btn.on('click', updateCounter());
