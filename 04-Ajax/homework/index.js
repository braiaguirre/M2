$('#boton').on('click', () => {
    if ($('#lista').hasClass('collapsed')) {
        $('#lista').empty();
        $.get('http://localhost:5000/amigos', (data) => {
            data.forEach(x => $('<li/>', {text: x.name}).appendTo($('#lista')))
        });
        $('#boton').text('Ocultar');
        $('#lista').removeClass('collapsed');
    } else {
        $('#boton').text('Ver');
        $('#lista').empty();
        $('#lista').addClass('collapsed');
    }    
})

$('#search').on('click', () => {
    $.get(`http://localhost:5000/amigos/${$('#input').val()}`, (data) => {
        $('#amigo').append(`<h3>${data.name}`);
        $('#amigo').append(`<p>${data.age} años`);
        $('#amigo').append(`<p>${data.email}`);
    });
    $('#input').val('');
    $('#input').focus();
})

$('#searchClear').on('click', () => {
    $('#amigo').empty();
})

$('#delete').on('click', () => {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${$('#inputDelete').val()}`,
        success: () => $('#successDelete').text('Eliminado correctamente.')
    });
});

let nuevoAmigoMaker = () => {
    //return $.get('http://localhost:5000/amigos', (data) => data);
    let id = 88;
    let name = $('#inputAddName').val();
    let age = $('#inputAddAge').val();
    let email = $('#inputAddEmail').val();
    return {
        id: id,
        name: name,
        age: age,
        email: email
    }
}


$('#add').on('click', () => {
    $.post( "http://localhost:5000/amigos/", {a:'a'} );

    // $.ajax({
    //     type: "POST",
    //     url: 'http://localhost:5000/amigos/',
    //     success: (data) => {
    //     data.push({
    //         id: 999,
    //         name: "asd",
    //         age: 25,
    //         email: "asd"
    //     })}
    // });
    // return this;
    // let nuevoAmigo = nuevoAmigoMaker();
    // $.post('http://localhost:5000/amigos/', {
    //     name: 'asd',
    //     age: 25,
    //     email: 'asd'
    // }),
    // alert('ok');

})


