import $ from "jquery";
import _ from "lodash";
import "./body.css";

var $btn = $('<button>Click here to get started</button>').appendTo('body');
$('body').append('<p id="count"></p>');

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
};

$btn.on('click', _.debounce(updateCounter, 500));
