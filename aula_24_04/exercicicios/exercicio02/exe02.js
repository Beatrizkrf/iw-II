function MostrarMensagem() {
    document. getElementById('text').innerText = "novo texto";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("MostrarMensagem").addEventListener("click", MostrarMensagem);
  });