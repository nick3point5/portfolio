import belly from "./assets/Bars/food/pixil-frame-0 (10).png"
import energy from "./assets/Bars/energy/pixil-frame-0 (10).png"
import fun from "./assets/Bars/fun/pixil-frame-0 (10).png"

import eat from "./assets/icons/restaurant-24px.svg"
import sleep from "./assets/icons/hotel-24px.svg"
import sing from "./assets/icons/audiotrack-24px.svg"
import pause from "./assets/icons/pause-24px.svg"
import mute from "./assets/icons/volume_up-24px.svg"
import cloud from "./assets/icons/cloud-24px.svg"

import song from "./assets/30 minutes of kirby music to make you feel better.mp3"

import axios from 'axios'

import './App.css';

function cloudFunction() {
  let DBdata = {}
  let found = false
  
  axios.get(`https://tomagotchi.herokuapp.com/db/`)
   .then(response => {
    DBdata = response.data

    DBdata.forEach(DBpet => {
        if(DBpet.Petname === document.getElementById('name').value){
          if(window.pet.age>=DBpet.age){
            update(DBpet)
          }
          if(DBpet.age>window.pet.age){
            load(DBpet)
          }
          found = true
        }
      });

    if(!found && document.getElementById('name').value !== '' && window.pet.alive){
      save()

    }

   })
}

function update(DBdata) {
  const DBupdate = {
    "Petname": document.getElementById('name').value,
    "belly": window.pet.belly,
    "energy": window.pet.energy,
    "fun": window.pet.fun,
    "age": window.pet.age
  }
  axios.post(`https://tomagotchi.herokuapp.com/db/`+DBdata._id, DBupdate)
}

function del () {
  axios.get(`https://tomagotchi.herokuapp.com/db/`)
   .then(response => {
    const DBdata = response.data

    DBdata.forEach(DBpet => {
        if(DBpet.Petname === document.getElementById('name').value){
          axios.delete(`https://tomagotchi.herokuapp.com/db/`+DBpet._id)
        }
    })
   })
  
}

setInterval(() => {
  if (!window.pet.alive && window.playwin.pause) {
    del()
  }
}, 1000 / 20);



function load (DBdata) { 
      document.getElementById('name').value = DBdata['Petname']
      window.pet.name=DBdata['Petname']
      window.pet.belly=DBdata['belly']
      window.pet.energy=DBdata['energy']
      window.pet.fun=DBdata['fun']
      window.pet.age=DBdata['age']

 }

 function save () { 
  const DBdata = {
    "Petname": document.getElementById('name').value,
    "belly": window.pet.belly,
    "energy": window.pet.energy,
    "fun": window.pet.fun,
    "age": window.pet.age
  }
  
   axios.post(`https://tomagotchi.herokuapp.com/db/`,DBdata)


 }

function App() {
  return (
    <div>
      <div className="canvas">
        <div className="ui">
            <div className="top-ui ui-comp">
                <div className="pet-status">
                    <img className="gauge" id='belly' src={belly} alt=""></img>
                    <img className="gauge" id='energy' src={energy} alt=""></img>
                    <img className="gauge" id='fun' src={fun} alt=""></img>
                </div>
                <div className="notification">
                    <p id="message">Click Here to Play</p>
                </div>
                <div className="pet-info">
                    {/* <input type="text" id='name' value="Korby"/> */}
                    <input type="text" id='name'/>
                    <p id="age-display"> 0 sec old</p>

                </div>
            </div>
            <div className="bottom-ui ui-comp">
                <div className="actions">
                    <button className="action btn" id="feedBtn">
                        <img src={eat} className="icon feed" alt=""/>
                    </button>
                    <button className="action btn" id="sleepBtn">
                        <img src={sleep} className="icon sleep" alt=""/>
                    </button>
                    <button className="action btn" id="funBtn">
                        <img src={sing} className="icon fun" alt=""/>
                    </button>

                </div>
                <div className="settings">
                    <button className="setting btn" id="pauseBtn">
                        <img src={pause} className="icon pause" alt=""/>
                    </button>
                    <button className="setting btn" id="muteBtn">
                        <img src={mute} className="icon mute" alt=""/>
                    </button>
                    <button className="setting btn" id="CloudBtn" onClick={cloudFunction}>
                        <img src={cloud} className="icon cloud" alt=""/>
                    </button>
                </div>
                
            </div>
        </div>
        <div className="play-space">
            <img src="assets/sprites/walking/0.png" className="hidden" id="pet" alt=""/>
            <img src="assets/Chicken-leg.png" className="hidden" id="food" alt=""/>
        </div>
      </div>
      <audio src={song} id='music'></audio>
    </div>
  );
}

export default App;