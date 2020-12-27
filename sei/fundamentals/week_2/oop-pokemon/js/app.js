let cards=[
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ]

const game_obj = {
    round: 1,
}

player = {
    pts:0,
    win:0,
    cards :[],
}

cpu={
    pts:0,
    win:0,
    cards :[],  
}

function getRand(max) {
    let num = Math.random()* (max + 1)
    num = Math.floor(num)
    return num
}

function deal(){
    for (let i = 0; i < 3; i++) {
        player.cards[i]=cards.splice(getRand(cards.length-1),1)[0]
        cpu.cards[i]=cards.splice(getRand(cards.length-1),1)[0]
    }
}

function round(){
    deal()
    for (let i = 0; i < 3; i++) {
        console.log("player's cards")
        console.log(player.cards)
        console.log('')
        console.log("computer's's cards")
        console.log(cpu.cards)
        console.log('')
        pick = prompt('pick a card num',0)
        //pick = 0
        ranpick = getRand(cpu.cards.length-1)
        console.log(`Player chooses ${player.cards[pick].name}. It has ${player.cards[pick].damage}`)
        console.log(`Computer chooses ${cpu.cards[ranpick].name}. It has ${cpu.cards[ranpick].damage}`)
        if (player.cards[pick].damage > cpu.cards[ranpick].damage) {
            console.log(`Player wins battle!`);
            player.pts++
        }else if(player.cards[pick].damage === cpu.cards[ranpick].damage){
          console.log(`Tie!`);
        }else{
            console.log(`Computer wins battle!`);
            cpu.pts++
        }

        console.log(`Score: Player: ${player.pts} Comuputer: ${cpu.pts}`)
        
      }
      if (player.pts > 1) {
        player.win++
        player.pts = 0
        cpu.pts=0
      } else{
        cpu.win++
        player.pts = 0
        cpu.pts=0
      }
      console.log(`Rounds Won: Player: ${player.win} Comuputer: ${cpu.win}`)
      game_obj.round++

}

function game(){
  game_obj.round=1
  for (let i = 0; i < 3; i++) {
    console.log(`There are ${cards.length} cards in the deck`)
    round()
  }
  if (player.win > 1) {
    player.win = 0
    console.log(`Player wins the game`)
  } else if(player.win === cpu.win){
    console.log(`nobody wins the game`)
  }else{
    cpu.win = 0
    console.log(`Computer wins the game`)
  }
}

game()