import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
var $btn = $('<button>Click here to get started</button>').appendTo('body');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
};

$btn.on('click', _.debounce(updateCounter, 500));
