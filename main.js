
form = document.getElementById(`fomulario`);

form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    valueA = document.getElementById(`campo-a`).value;
valueB = document.getElementById(`campo-b`).value;
    if (valueB > valueA) {
        return alert(`All set`)
    } else {
        alert(`Value B must be bigger than value A`)
    }

});
