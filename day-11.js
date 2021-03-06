/*
The State Design Pattern can be used, for example, to manage the state of a tank in the StarCraft game.

The pattern consists in isolating the state logic in different classes rather than having multiple ifs to determine what should happen.

Your Task
Complete the code so that when a Tank goes into SiegeMode it cannot move and its damage goes to 20. When it goes to TankMode it should be able to move and the damage should be set to 5.

You have 3 classes:

Tank: has a state, canMove and damage properties
SiegeState and TankState: has canMove and damage properties
Note: The tank initial state should be TankState.

Resources
PatternCraft > State
SourceMaking > State
Wikipedia > State
PatternCraft series
State Pattern
Strategy Pattern
Visitor Pattern
Decorator Pattern
Adapter Pattern
Command Pattern
The original PatternCraft series (by John Lindquist) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.*/

class SiegeMode {
  constructor() {
    this.canMove = false;
    this.damage = 20;
  }
}

class TankState {
  constructor() {
    this.canMove = true;
    this.damage = 5;
  }
}

class Tank {
  constructor() {
    this.state = new TankState();
  }

  get canMove(){
    return this.state.canMove
  }

  get damage(){
    return this.state.damage
  }
}

let tank = new Tank();

console.log(tank.canMove)
console.log(tank.damage)

let tankSiege = new Tank();
tankSiege.state = new SiegeMode();

console.log(tankSiege.canMove)
console.log(tankSiege.damage)

for (let n = 0; n < 10; n++) {
  let tank = new Tank();

  let canMove = tank.canMove;
  let damage = tank.damage;

  for (let i = 0; i < 10; i++) {
    if (Math.random() <= 0.5) {
      tank.state = new SiegeMode();
      canMove = false;
      damage = 20;
    }
    else {
      tank.state = new TankState();
      canMove = true;
      damage = 5;
    }

    console.log(tankSiege.canMove)
    console.log(tankSiege.damage)

  }
}