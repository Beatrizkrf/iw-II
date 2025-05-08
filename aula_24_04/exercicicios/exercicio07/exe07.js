function mudacp(){
    const paragrafo = document.getElementById('paragrafo')
    paragrafo.style.color="red";
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botao").addEventListener("click", mudacp);
})