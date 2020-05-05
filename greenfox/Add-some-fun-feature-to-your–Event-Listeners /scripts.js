$('.button-1').click(function() {
    console.log("Yeah, you clicked me");
});

$('.button-2').click(function() {
    // e.preventDefault();
    $('.button-1').text('Yeah, you clicked the other button');
});
let hasColorChanged = false;
$('.button-3').click(function() {
    console.log(hasColorChanged)
    if (!hasColorChanged) {
        let oldColor = $('button').css('background-color');
        console.log(oldColor);
        let myColor = $('#colorinput').val();
        // console.log(oldColor, myColor);
        // console.log(myColor);
        $('button').css('background', myColor);
        let newColor = $('button').css('background-color');
        console.log(newColor);
        if (newColor != oldColor) {
            hasColorChanged = true;
        }
    }
});