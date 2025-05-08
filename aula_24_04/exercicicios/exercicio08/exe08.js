function contacarac(){
    const texto = document.getElementById('cxtexto').value;
    conta = texto.length;
    const resultado = document.getElementById('resultado');

    resultado.textContent = `O número de caracteres digitados foi ${conta}`;

    resultado.style.display = "block";

}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("botao").addEventListener("click", contacarac);
})