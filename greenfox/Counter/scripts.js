let myCounter = 0;
$('h2').append(myCounter);

$('.increase').click(function() {
    myCounter++;
    $('h2').text(myCounter);
});


$('.decrease').click(function() {
    myCounter--;
    $('h2').text(myCounter);
});