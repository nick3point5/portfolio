class ship{
    constructor(name,hull,firepower,accuracy){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    atk(target) {
        
        if(Math.random() <= this.accuracy){
            target.hull -= this.firepower
            if (target.hull >= 0) {
                console.log(`${this.name} hit ${target.name} for ${this.firepower} damage`)
            }else {
                console.log(`${this.name} destroyed ${target.name}`)
            }

        }else{
            console.log(`${this.name} missed`)
        }
    }
    retreat() {
        console.log(`${this.name} ran away`)
    }
}

function getRand(max,min) {
    let num = Math.random()* (max + 1 - min) + min - 1
    num = Math.ceil(num)
    return num
}

class enemyship extends ship {
    static count = 1;
    constructor(name){
        super(`${name}_${enemyship.count}`,...newEnemy());
        enemyship.count++
    }
}

function newEnemy() {
    enemyHull = getRand(6,3)
    enemyFirepower= getRand(4,2)
    enemyAccuracy= getRand(80,60)/100
    return [enemyHull,enemyFirepower,enemyAccuracy]
}

function battle(atk,def){
    console.clear()
    let playerTurn = true
    for (let i=0;atk.hull>0 && def.hull>0;i++) {
        if (playerTurn){
            atk.atk(def)
            playerTurn = !playerTurn
        }else{
            def.atk(atk)
            playerTurn = !playerTurn
        }
        if (i > 100){
            atk.hull=0
            console.log(`${atk.name} died of boredom`)
        }
    }
    if(def.hull <= 0){
        chk=prompt("You won! Next round? Y/N", "Y")
        //chk='Y'
        if (chk.toLowerCase() === 'y') {
            engage = true
        }else{
            engage = false
        }

        return engage
    } else{
        console.log('Game Over')
    }
    
}

function Start() {
    const player = new ship('USS Assembly',20,5,.7);
    let enemy = new enemyship('Enemy')
    let engage = confirm('Start Game')
    for (let i = 0; i < 6; i++) {
        if(engage){
            engage = battle(player,enemy)
            enemy = new enemyship('Enemy')
        }else{
            player.retreat()
            console.clear()
            return "Game Over,You're a coward"
        }
    }
    console.clear()
    return "Congradulations you beat the game"
}

console.log(Start())
