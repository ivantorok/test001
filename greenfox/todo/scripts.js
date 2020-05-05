// let todo = [['Buy milk','todo']];

// todo.forEach(element => {
//     if (element[1] == todo) {
//         let todoitem = '<li>'  + element[0] + '<div class=> </li>'    
//     } else {

//     }

// $('ul').append(content);
// });

// /*
let counter = 0;

let content = '<li class="todo-item-' + counter++ + '">Buy milk<span class="done"> &#x2713;</span> <span class="trash"> &#x1F5D1;</span></li>';
$('ul').append(content);

$('button').click(function() {
    // console.log($('#addTodo').val());
    let newTodo = $('#addTodo').val();
    if (newTodo != "") {
        // console.log(newTodo);
        // content = '<li class="todo-item-' + counter++ + '">' + newTodo + '</li>';
        content = '<li class="todo-item-' + counter++ + '">' + newTodo + '<span class="done"> &#x2713;</span> <span class="trash"> &#x1F5D1;</span></li>';
        $('ul').append(content);
        $('#addTodo').val('');
    }
});
// */

$('input').keypress(function(e) {
    console.log(event.target);
    console.log(e.which);
    if (e.which == 13) {
        $('button').click();
        return false;
    }
});

$('body').click(function() {
    // console.log(event.target);
    // console.log(event.target);
    // console.log(event.target.className);
    // console.log(event.target.outerHTML);
    let test1 = $(event.target).closest('li');
    // // let test1 = $(event.target).html();
    // console.log(test1);
    // $(test1).append('style', 'text-decoration-line:line-through');
    if (event.target.className == 'done') {
        $(test1).css('text-decoration-line', 'line-through');
    } else {
        if (event.target.className == 'trash') {
            $(test1).remove();
        }
    }

    // thisTodo = event.target.className
    // $(event.target.outerHTML.outerHTML).append('style', 'text-decoration-line:line-through');

});