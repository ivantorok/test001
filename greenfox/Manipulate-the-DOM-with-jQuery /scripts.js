let names = ['saci', 'bodza', 'botond', 'ilka', 'ivan']


names.forEach(element => {
    // console.log("<li> %s </li>",
    //     element)
    // let listItem = ("<li> %s </li>",
    // element);
    // console.log(listItem);
    // $('ul').attr(listItem);
    if (element == 'ivan') {
        element = '<b>' + element + '</b>'
    }
    $('ul').append('<li>' +
        element + '</li>');
    // $(listItem).appendTo('ul');
});


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};


$('body').append('<fieldset> </fieldset>');
$('fieldset').append('<legend></legend>');
$('legend').append(additionalBlock.title);
$('fieldset').append('<p class="text"></p>');
$('.text').append(additionalBlock.text);