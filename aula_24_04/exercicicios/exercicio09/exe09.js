function aumentafonte(){
    const paragrafo = document.getElementById('paragrafom')

    let atual = parseInt(paragrafo.style.fontSize || 30)
    atual += 2
    paragrafo.style.fontSize= atual + "px";

}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botao").addEventListener("click", aumentafonte);
})