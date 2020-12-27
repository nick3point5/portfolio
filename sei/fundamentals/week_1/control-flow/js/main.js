const title = document.querySelector("h1");
const button = document.querySelector("button");
let stat = false;

title.innerHTML = "Ha! You've hacked";

button.addEventListener("click", () => {
  stat = !stat;
  if (stat) {
    title.style.color = "red";
  } else {
    title.style.color = "black";
  }
});

/* const sunny = true;
const temp = 76;


if(sunny) {
    console.log('It is sunny today')
} else if (temp > 70) {
    console.log('It is not sunny')
}
 console.log(!(20 >= 21)) */

for (let i = 0; i < 10; i++) {
  const enemy = {
    id: i,
    health: 10,
    damage: 0,
    attack: function () {},
  };
  console.log(enemy);
}
