/*index.html*/
/*card-01*/
function mostrarTarjeta() {
  document.getElementById("frente").style.display = "none";
  document.getElementById("dorso").style.display = "flex";
}
function ocultarTarjeta() {
  document.getElementById("dorso").style.display = "none";
  document.getElementById("frente").style.display = "flex";
}

//card-02
function mostrarTarjetaTwo() {
  document.getElementById("frente-two").style.display = "none";
  document.getElementById("dorso-two").style.display = "flex";
  document.getElementById("dorso-two").style.alignItems = "baseline";
}
function ocultarTarjetaTwo() {
  document.getElementById("dorso-two").style.display = "none";
  document.getElementById("frente-two").style.display = "flex";
}

//card-03
function mostrarTarjetaThree() {
  document.getElementById("frente-three").style.display = "none";
  document.getElementById("dorso-three").style.display = "flex";
}
function ocultarTarjetaThree() {
  document.getElementById("dorso-three").style.display = "none";
  document.getElementById("frente-three").style.display = "flex";
}
