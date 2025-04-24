function MostrarMensagem() {
    alert("JavaScript é divertido !");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("MostrarMensagem").addEventListener("click", saudacao);
  });