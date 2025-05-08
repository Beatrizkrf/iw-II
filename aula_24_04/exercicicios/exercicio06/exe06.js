function h1par(){
    document.getElementById('divd').innerHTML = '<h1>Título</h1><br><p>Paragráfo</p>'
}


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botao").addEventListener("click", h1par);
})