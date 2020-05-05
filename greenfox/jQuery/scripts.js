let i = 0;

$('p').each(function() {
    // element == this
    i++;
    let idName = 'fox-' + i
    $(this).attr('id', idName);

});
// $('p').attr('id', 'fox-1');


$('#fox-1').text('Macrotis');

$('#fox-2').css('border-color', 'blue');

$('p').css('background', 'yellow');