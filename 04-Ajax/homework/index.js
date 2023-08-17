let amigosBtn = $('#boton');
let amigosUl = $('#lista');
let searchBtn = $('#search');
let searchSpan = $('#amigo');
let searchInput = $('#input');
let searchClearBtn = $('#searchClear');
let deleteBtn = $('#delete');
let deleteInput = $('#inputDelete');
let deleteSpan = $('#successDelete');

let amigosLoad = () => {
    if (amigosUl.hasClass('collapsed')) {
        amigosUl.empty();
        $.get('http://localhost:5000/amigos', (data) => {
            data.forEach(x => $('<li/>', {text: x.name}).appendTo(amigosUl))
        });
        amigosBtn.text('Ocultar');
        amigosUl.removeClass('collapsed');
    } else {
        amigosBtn.text('Ver');
        amigosUl.empty();
        amigosUl.addClass('collapsed');
    }  
}

let searchLoad = () => {
    $.get(`http://localhost:5000/amigos/${searchInput.val()}`, (data) => {
        searchSpan.append(`<h3>${data.name}`);
        searchSpan.append(`<p>${data.age} años`);
        searchSpan.append(`<p>${data.email}`);
    });
    searchInput.val('');
    searchInput.focus();
}

let deleteLoad = () => {
    $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${deleteInput.val()}`,
        success: () => alert('Eliminado correctamente.')
    });
    deleteInput.val('');
    amigosBtn.text('Ver');
    amigosUl.empty();
    amigosUl.addClass('collapsed');
}

amigosBtn.on('click', amigosLoad);
searchBtn.on('click', searchLoad);
searchClearBtn.on('click', () => searchSpan.empty());
deleteBtn.on('click', deleteLoad);