class ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.rage = 1;
    this.alive = true;
    this.money = 0;
  }
  atk(target) {
    if (Math.random() <= this.accuracy) {
      target.hull -= this.firepower;
      if (target.hull > 0) {
        console.log(
          `${this.name} hit ${target.name} for ${this.firepower} damage`
        );
        console.log(`${target.name} has ${target.hull} hull remaing`);
      } else {
        console.log(`${this.name} destroyed ${target.name}`);
      }
    } else {
      if (target.hull > 0) {
        console.log(`${this.name} missed`);
      } else {
        console.log(`${this.name} destroyed ${target.name}`);
      }
    }
  }
  retreat() {
    console.log(`${this.name} ran away`);
  }
}

class playership extends ship {
  constructor() {
    super();
    this.name = "USS Assembly";
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
    this.missile = 3;
    this.missileFirepower = 10;
    this.fuel = 3;
  }
}

class enemyship extends ship {
  static count = 1;
  constructor() {
    super();
    this.name = `Enemy_${enemyship.count}`;
    this.hull = getRand(6 + Overview.wave, 3);
    this.firepower = getRand(4 + Overview.wave, 2);
    this.accuracy = getRand(80 + Overview.wave * 10, 60) / 100;
    this.rage = getRand(3, 1);
    this.money = getRand(100 + Overview.wave * 100, 50);
    enemyship.count++;
  }
}

class podship extends ship {
  static count = 1;
  constructor() {
    super();
    this.name = `Pod_${podship.count}`;
    this.hull = 10 + Overview.wave * 5;
    this.firepower = 3 + Overview.wave;
    this.accuracy = 0.8;
    podship.count++;
  }
}

class megaship extends ship {
  constructor(pods) {
    super();
    this.name = "Boss";
    this.hull = 30 + Overview.wave * 10;
    this.firepower = 5 + Overview.wave;
    this.accuracy = 0.6 + Overview.wave * 0.1;
    this.pods = pods;
  }
}

function getRand(max, min) {
  let num = Math.random() * (max + 1 - min) + min - 1;
  num = Math.ceil(num);
  return num;
}

function battleprep(player) {
  if (player.fuel > 0) {
    if (prompt("Return to base? y/n", "n") === "y") {
      player.fuel -= 1;
      player.hull += 10;
      console.log(`$${player.money}`);
      if (
        prompt(`Upgrade weapons for $${player.firepower * 100} y/n`, "y") ===
        "y"
      ) {
        if (player.money >= player.firepower * 100) {
          player.money -= player.firepower * 100;
          player.firepower += 1;
        } else {
          console.log("Insuffient funds");
        }
      }
      if (prompt(`Buy missile for $100 y/n`, "y") === "y") {
        if (player.money >= 100) {
          player.money -= 100;
          player.missile += 1;
        } else {
          console.log("Insuffient funds");
        }
      }
    }
  }
}

function battle(atk, def) {
  console.clear();
  let playerTurn = true;

  for (let i = 0; atk.hull > 0 && def.hull > 0; i++) {
    if (playerTurn) {
      if (atk.missile > 0) {
        if (confirm("Use Missile")) {
          atk.missile--;
          def.hull -= atk.missileFirepower;
          if (atk.missile === 1) {
            console.log(atk.missile + " missile remaining");
          } else {
            console.log(atk.missile + " missiles remaining");
          }
          atk.atk(def);
          playerTurn = !playerTurn;
        } else atk.atk(def);
        playerTurn = !playerTurn;
      } else {
        atk.atk(def);
        playerTurn = !playerTurn;
      }
    } else {
      for (let i = 0; i < def.rage; i++) {
        def.atk(atk);
      }
      playerTurn = !playerTurn;
    }
  }
  if (def.hull <= 0) {
    atk.money += def.money;
    def.alive = false;
    if (prompt("You won! Next round? y/n", "y") === "y") {
      battleprep(atk);
      return true;
    } else {
      return false;
    }
  }
}

function enemyleft(enemy) {
  survived = [];
  for (let i = 0; i < enemy.length; i++) {
    if (enemy[i].alive) {
      survived.push(i + 1);
    }
  }
  return survived;
}

function Start() {
  numEnemy = getRand(10, 6);
  const player = new playership();
  enemyship.count = 1;
  podship.count = 1;
  let enemy = [];
  let pods = [];
  for (let i = 0; i < 3 + Overview.wave; i++) {
    pods[i] = new podship();
  }
  for (let i = 0; i < numEnemy; i++) {
    enemy[i] = new enemyship();
  }
  const boss = new megaship(pods);

  let engage = true;
  // let engage = true
  for (let i = 0; i < numEnemy; i++) {
    target =
      Number(
        prompt(
          `Pick an alien to target: ${enemyleft(enemy)}`,
          enemyleft(enemy)[0]
        )
      ) - 1;
    while (!enemy[target].alive) {
      target =
        Number(
          prompt(
            `Pick an alien to target: ${enemyleft(enemy)}`,
            enemyleft(enemy)[0]
          )
        ) - 1;
    }
    // target=i

    if (engage) {
      player.hull += getRand(3, 0);
      engage = battle(player, enemy[target]);
    } else {
      player.retreat();
      console.clear();
      player.alive = false;
      return "Game Over";
    }
  }

  for (let i = 0; i < boss.pods.length; i++) {
    target =
      Number(
        prompt(
          `Pick an pod to target: ${enemyleft(boss.pods)}`,
          enemyleft(boss.pods)[0]
        )
      ) - 1;
    while (!boss.pods[target].alive) {
      target =
        Number(
          prompt(
            `Pick an pod to target: ${enemyleft(boss.pods)}`,
            enemyleft(boss.pods)[0]
          )
        ) - 1;
    }
    // target = i

    if (engage) {
      player.hull += getRand(3, 0);
      engage = battle(player, boss.pods[target]);
    } else {
      player.retreat();
      console.clear();
      return "Game Over";
    }
  }

  if (engage) {
    player.hull += getRand(3, 0);
    engage = battle(player, boss);
  } else {
    player.retreat();
    console.clear();
    return "Game Over";
  }

  console.clear();
  Overview.wave++;
  return "Congradulations you beat the game";
}

function StartE() {
  const player = new playership();
  enemyship.count = 1;
  podship.count = 1;
  let enemy = {};

  let engage = true;

  for (let i = 0; player.alive; i++) {
    enemy = new enemyship();
    if (engage) {
      player.hull += getRand(3, 0);
      engage = battle(player, enemy);
    } else {
      player.alive = false;
      console.clear();
      return `Game Over ${enemyship.count - 1} enemies destroyed`;
    }
    if (!i % 10) {
      Overview.wave += 1;
    }
  }
  return `Game Over ${enemyship.count - 1} enemies destroyed`;
}

function Game() {
  let start = confirm("Start Game");
  if (confirm("Endless mode")) {
    result = StartE();
    console.log(result);
    while (prompt("Would you like to play again? y/n", "y") === "y") {
      Overview.wave += 0.1;
      result = StartE();
      console.log(result);
    }
  } else {
    if (start) {
      result = Start();
      console.log(result);
      while (prompt("Would you like to play again? y/n", "y") === "y") {
        result = Start();
        console.log(result);
      }
    }
  }
}

Overview = {
  wave: 0,
};

Game();
