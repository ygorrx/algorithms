class Spaceship {
  constructor(name, crewQuantity){
    this.name = name;
    this.crew = crewQuantity;
    this.isHitched = false;
    this.doorOpen = false;
  }

  hitch(){
    this.isHitched = true;
    this.doorOpen = true;
  }
}

function showMenu(){
  let chosenOption;
  while(chosenOption != '1' && chosenOption != '2' && chosenOption != '3'){
    chosenOption = prompt("O que deseja fazer?\n" +
    "1- Engatar nave\n" +
    "2- Imprimir naves\n" +
    "3- Sair do programa")
  }
  return chosenOption;
}

function printSpaceshipList(spaceships){
  let spaceshipList = ''
  spaceships.forEach((spaceship, index) => {
    spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crew+ " tripulantes)\n"
  });
  alert(spaceshipList)
}

function createSpaceship(){
  let spaceshipName = prompt("Informe o nome da nave");
  let crewQuantity = prompt("Informe a quantidade de tripulantes")
  let spaceship = new Spaceship(spaceshipName, crewQuantity)
  return spaceship
}

let hitchedSpaceShips = [];
let chosenOption

while(chosenOption != '3'){
  chosenOption = showMenu();
  switch(chosenOption){
    case "1":
      let spaceshipAdd = createSpaceship()
      spaceshipAdd.hitch();
      hitchedSpaceShips.push(spaceshipAdd)
      break
    case '2':
      printSpaceshipList(hitchedSpaceShips)
      break
  }
}