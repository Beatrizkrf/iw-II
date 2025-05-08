function escondemostpara(){
    const paragrafo = document.getElementById('paragrafo')
    if (paragrafo.style.display=="block"  || paragrafo.style.display === ""){
        paragrafo.style.display="none";
    } else if (paragrafo.style.display=="none"){
        paragrafo.style.display="block"
    };
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botao").addEventListener("click", escondemostpara);
})