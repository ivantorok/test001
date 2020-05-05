$('.button-1').click(function() {
    console.log("Yeah, you clicked me");
});

$('.button-2').click(function() {
    // e.preventDefault();
    $('.button-1').text('Yeah, you clicked the other button');
});

$('.button-3').click(function() {
    $('button').css('background', 'red');
});