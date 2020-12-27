class ship{
    constructor(name,hull,firepower,accuracy){
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        this.rage = 1
    }
    atk(target) {
        
        if(Math.random() <= this.accuracy){
            target.hull -= this.firepower
            if (target.hull > 0) {
                console.log(`${this.name} hit ${target.name} for ${this.firepower} damage`)
                console.log(`${target.name} has ${target.hull} hull remaing`)
            }else {
                console.log(`${this.name} destroyed ${target.name}`)
            }

        }else{
            if (target.hull > 0) {
            console.log(`${this.name} missed`)
            }else {
                console.log(`${this.name} destroyed ${target.name}`)
            }
        }
    }
    retreat() {
        console.log(`${this.name} ran away`)
    }
}

class playership extends ship{
    constructor(){
        super()
        this.name = 'USS Assembly'
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
        this.missile = 20
        this.missileFirepower = 10
    }
}

class enemyship extends ship {
    static count = 1;
    constructor(){
        super(``,...newEnemy());
        this.name = `Enemy_${enemyship.count}`
        this.alive = true
        this.rage = getRand(3,1)
        enemyship.count++
    }
}

class podship extends ship {
    static count = 1;
    constructor(){
        super()
        this.name =`Pod_${podship.count}`
        this.alive = true
        this.hull = 10
        this.firepower = 3
        this.accuracy = .8
        podship.count++
    }
}


class megaship extends ship {
    constructor(pods){
        super()
        this.name = 'Boss'
        this.hull = 30
        this.firepower = 5
        this.accuracy = .6
        this.pods = pods
    }
}

function getRand(max,min) {
    let num = Math.random()* (max + 1 - min) + min - 1
    num = Math.ceil(num)
    return num
}

function newEnemy() {
    enemyHull = getRand(6,3)
    enemyFirepower= getRand(4,2)
    enemyAccuracy= getRand(80,60)/100
    return [enemyHull,enemyFirepower,enemyAccuracy]
}


function battle(atk,def){
    console.clear()
    let playerTurn =true

    for (let i=0;atk.hull>0 && def.hull>0;i++) {
        if (playerTurn){
            if (atk.missile > 0) {
                if(confirm('Use Missile')){
                    atk.missile--
                    def.hull -= atk.missileFirepower
                    if(atk.missile === 1){
                        console.log(atk.missile+' missile remaining')
                        
                    }else{
                        console.log(atk.missile+' missiles remaining')
                    }
                    atk.atk(def)
                    playerTurn = !playerTurn
                }
            }else{
                atk.atk(def)
                playerTurn = !playerTurn
            }
        }else{
            for (let i = 0; i < def.rage; i++) {
                def.atk(atk)
            }
            playerTurn = !playerTurn
        }
    }
    if(def.hull <= 0){
        chk=prompt("You won! Next round? Y/N", "Y")
        // chk='Y'
        def.alive = false
        if (chk.toLowerCase() === 'y') {
            return true
        }else{
            return false
        }

    }
    
}

function enemyleft(enemy){
    survived = []
    for (let i = 0; i < enemy.length; i++) {
        if (enemy[i].alive){
            survived.push(i+1)
        }
    }
    return survived
}

function Start() {
    numEnemy= getRand(10,6)
    const player = new playership();
    enemyship.count = 1
    podship.count = 1
    let enemy = []
    let pods = []
    for (let i = 0; i < 10; i++) {
        pods[i] = new podship()
    }
    for (let i = 0; i < numEnemy; i++) {
        enemy[i] = new enemyship()
        
    }
    const boss = new megaship(pods);

    let engage = true
    // let engage = true
    for (let i = 0; i < numEnemy; i++) {

        target=Number(prompt(`Pick an alien to target: ${enemyleft(enemy)}`, enemyleft(enemy)[0]))-1
        while(!enemy[target].alive){
            target=Number(prompt(`Pick an alien to target: ${enemyleft(enemy)}`, enemyleft(enemy)[0]))-1
        }
        // target=i
        
        if(engage){
            player.hull += getRand(3,0)
            engage = battle(player,enemy[target])
        }else{
            player.retreat()
            console.clear()
            return "Game Over"
        }
    }


    for (let i = 0; i < boss.pods.length; i++) {

        target=Number(prompt(`Pick an pod to target: ${enemyleft(boss.pods)}`, enemyleft(boss.pods)[0]))-1
        while(!boss.pods[target].alive){
            target=Number(prompt(`Pick an pod to target: ${enemyleft(boss.pods)}`, enemyleft(boss.pods)[0]))-1
        }
        // target = i
        
        if(engage){
            player.hull += getRand(3,0)
            engage = battle(player,boss.pods[target])
        }else{
            player.retreat()
            console.clear()
            return "Game Over"
        }
    }

    if(engage){
        player.hull += getRand(3,0)
        engage = battle(player,boss)
    }else{
        player.retreat()
        console.clear()
        return "Game Over"
    }

    


    console.clear()
    return "Congradulations you beat the game"
}

function Game(){
    let start = confirm('Start Game')
    if (start) {
        result=Start()
        console.log(result)
        while (prompt("Would you like to play again? Y/N", "Y").toLowerCase() === 'y') {
            result=Start()
            console.log(result)
        }
    }
}

Game()


