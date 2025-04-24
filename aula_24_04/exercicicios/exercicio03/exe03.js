function MostrarMensagem() {
    document.body.style.backgroundColor = "#f4acb7";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("MostrarMensagem").addEventListener("click", MostrarMensagem);
  });