/// <reference path="jquery-3.6.0.min.js" />

//$('p.cool').text('This is dynamic text');
//$('p.cool').css('background-color', 'green');
//$('p.cool').css('color', 'white');
// $('p.cool')
//   .slideUp(3000)
//   .slideDown(3000)
//   .fadeOut(2000)
//   .fadeIn(2000)
//   .hide(1500)
//   .show(1500);

// const firstName = $('#firstNameBox').val();
// $('p:first-of-type').text(firstName);

$('#containerDiv').html('<button>Click Me</button>');
$('#containerDiv').append('<input type="text" />');
$('#containerDiv').prepend('<textarea />');

//$('div.nice').next().css('background-color', 'red');
//$('div.nice').prev().css('background-color', 'red');
// $('div.nice').siblings().css('background-color', 'red');
//$('div.nice').parent().css('background-color', 'red');
// $('div.nice').children().css('background-color', 'red');
$('div.nice').siblings('.beauty').css('background-color', 'red');
