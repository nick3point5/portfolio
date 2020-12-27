const classIsInSession = true;
const username = 'codeguru789';
const price = 10.99;
const recipe = [
    {
        name: 'pork rib marinade',
        ingredients: ['soy sauce', 'onion powder', 'garlic powder','lime jucie','MSG','white sugar','ginger'],
        prepTime: '10 min'
    },
    {
        name: 'blueberry muffins',
        ingredients: ['flour', 'vegetable oil', 'blueberries', 'sugar' ],
        preparationTime: 40,
    },
    {
        name: 'spaetzle',
        ingredients: ['egg noodles', 'bacon', 'bologna', 'parm', 'red pepper'],
        prepTime: 60,
    }
]

for (let i = 0; i < recipe.length; i++) {
    // console.log(recipe[i].name)
    
}

const students = [
    {
        firstName: 'Joal',
        currentTown: 'Seattle, WA',
        enjoysKayaking: true,
        favFood: 'Eggs',
        hobbies: ['drawing', 'walking', 'cruising']
    },
    {
        firstName: 'O\'Brien',
        currentTown: 'Denver',
        enjoysCooking: false,
        favFood: 'burrito',
        hobbies: ['snowboarding', 'writing', 'hunting']
    },
    {
        fname:'zac\'k',
        currentTown:'Houston, TX',
        enjoysCooking:true,
        favFood: 'rice',
        hobbies: ['videogames','animation','cooking']
    }
]

for (let i = 0; i < students.length; i++) {
    // console.log(students[i])
    
}

function attack(tar){
    tar.hp -= this.damage
}


const player = {
    name: 'player 1',
    hp: 10,
    damage:3,
    attack: attack
}

const orge1 = {
    name: 'Orge',
    hp: 10,
    damage: 2 /* function () {
        return Math.floor(Math.random()*5)
    } */,
    attack: attack
}


    for (let i = 0; orge1.hp >0 && player.hp >0; i++) {
        if (!i%2) {
            orge1.attack(player)
        }else{
            player.attack(orge1)
        }
    }

    console.log(player.hp)
    console.log(orge1.hp)