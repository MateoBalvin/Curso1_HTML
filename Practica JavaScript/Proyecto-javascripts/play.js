
let humanScore = 0;
let cpuScore = 0;

//Boton piedra
let piedra_boton = document.querySelector(".piedra-boton")
piedra_boton.addEventListener("click",aparecer_eleccion)

//Boton papel
let papel_boton = document.querySelector(".papel-boton")
papel_boton.addEventListener("click",aparecer_eleccion)

//Boton Tijeras
let tijera_boton = document.querySelector(".tijera-boton")
tijera_boton.addEventListener("click",aparecer_eleccion);

let human_choise = document.querySelector(".human-choise");
let cpu_choise = document.querySelector(".cpu-choise");

function aparecer_eleccion(){

    
    human_choise.innerHTML="";

    if(piedra_boton==event.target){

    let texto_piedra = document.createTextNode("Piedra");
    human_choise.appendChild(texto_piedra);

    }
    else if(papel_boton==event.target){

        let texto_papel = document.createTextNode("Papel")
        human_choise.appendChild(texto_papel);
    }
    else if(tijera_boton==event.target){
        let texto_tijera= document.createTextNode("Tijera")
        human_choise.appendChild(texto_tijera)
    }
    
    PlayRound();
    CpuChoise();
    
}






function CpuChoise() {

    cpu_choise.innerHTML="";
    let cpu_arreglo=["Piedra","Papel","Tijera"];

    let eleccion_aleatoria = cpu_arreglo[Math.floor(Math.random() * cpu_arreglo.length)];
    cpu_choise.textContent = eleccion_aleatoria;
}



function PlayRound() {
    let cpu = cpu_choise.textContent;
    let human = human_choise.textContent;
  
    //Piedra
    if (human == "Piedra" && cpu == "Piedra") {
      return alert(
        "EMPATE!! \n La CPU tambien escogio piedra... \n Fue un combate " +
          human +
          " vs " +
          cpu
      );
    } else if (human == "Piedra" && cpu == "Papel") {
      CpuScore++;
      return alert(
        "PERDISTE!! \n La CPU escogio papel... \n Fue un combate " +
          human +
          " vs " +
          cpu
      );
    } else if (human == "Piedra" && cpu == "Tijera") {
      HumanScore++;
      return alert(
        "GANASTEE!! \n La CPU escogio tijera... \n Fue un combate " +
          human +
          " vs " +
          cpu
      );
    }
  
    //Papel
    else if (human == "Papel" && cpu == "Papel") {
      return (
        "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate " +
        human +
        " vs " +
        cpu
      );
    } else if (human == "Papel" && cpu == "Tijera") {
      CpuScore++;
      return (
        "PERDISTE!! \n La CPU escogio tijera... \n Fue un combate " +
        human +
        " vs " +
        cpu
      );
    } else if (human == "Papel" && cpu == "Piedra") {
      HumanScore++;
      return (
        "GANASTEE!! \n La CPU escogio Piedra... \n Fue un combate " +
        human +
        " vs " +
        cpu
      );
    }
  
    //Tijera
    else if (human == "Tijera" && cpu == "Tijera") {
      return (
        "EMPATE!! \n La CPU tambien escogio papel... \n Fue un combate " +
        human +
        " vs " +
        cpu
      );
    } else if (human == "Tijera" && cpu == "Piedra") {
      CpuScore++;
      return (
        "PERDISTE!! \n La CPU escogio piedra... \n Fue un combate " +
        human +
        " vs " +
        cpu
      );
    } else if (human == "Tijera" && cpu == "Papel") {
      HumanScore++;
      return (
        "GANASTEE!! \n La CPU escogio papel... \n Fue un combate " +
        human +
        " vs " +
        cpu
      );
    }
  }

  document.querySelector(".human-score").textContent = "Jugador: " + humanScore;
    document.querySelector(".cpu-score").textContent = "CPU: " + cpuScore;
  
   
