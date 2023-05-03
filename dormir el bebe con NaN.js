let bebeDespierto = false; //shhh...está durmiendo el bebé
const body = document.querySelector("body");
const cambiarEstadoBebe = document.createElement("button");
cambiarEstadoBebe.textContent =
  "Cambiar el estado del bebe (Dormido/Despierto)";
body.appendChild(cambiarEstadoBebe);
cambiarEstadoBebe.addEventListener("click", () => {
  //si el bebé duerme no hagas clic aquí...espera...noooooo!!!!
  bebeDespierto = !bebeDespierto;
  if (bebeDespierto) {
    console.log("El bebé se ha despertado 👶"); //oh noooo
    intervalID = setInterval(dormirElBebe, 1000);
  }
});
const nan = 0 / 0;
function dormirElBebe() {
  //Creamos la función mágica, que duerme al bebé
  console.log(nan, nan, nan);
  console.log("");
  console.log(nan, nan, nan);
  console.log("");
  console.log(nan, nan, nan);
  console.log(nan, nan, nan, nan);
  console.log("");
  console.log(nan, nan, nan);
  console.log("");
  console.log(nan, nan, nan);
  console.log("");
  console.log(nan, nan, nan, nan, nan);
  console.log(nan, nan);
  if (!bebeDespierto) {
    clearInterval(intervalID);
    console.log("shhhh 🤫, el bebé está durmiendo.");
  }
}
