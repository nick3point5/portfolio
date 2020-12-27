const nums = [1,2,3,4,5]

const firstValue = nums[0];
const lastValue = nums[4];
const middleValue = nums[2];

const arr = ['a','b','c']

for (let i = 0; i <= arr.length-1; i++) {
    //console.log(arr[i]);
    
}





//1
for (let i = 50; i >= 20; i--) {
    if (i%3 === 0) {
        console.log(i);
    }
    
}
//2
for (let index = 0; index < 10; index--) {
    console.log('ERROR');
}
//3
const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];

for (let i = 0; i < presidents.length; i++) {
    if (i%2 !== 0){
        console.log(presidents[i]);
    }
}

//4
const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
const gluten_free_menu=[]



for (let i = 0; i < menu.length; i++) {
    
    if (menu[i].glutenFree){
        gluten_free_menu.push(menu[i]);
    }
    
}

//5
const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]
const notnum = []

for (let i = 0; i < mixedArray.length; i++) {
    if(typeof mixedArray[i] !== "number"){
        notnum.push(mixedArray[i]);
    }     
}

//bonus
const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]
const goat = []

for (let i = 0; i < league.length; i++) {
    for (let n = 0; n < league[i].players.length; n++) {
        if (league[i].players[n].goat){
            goat.push(league[i].players[n].name);
        }  
    }    
}