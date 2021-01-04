import belly from "./assets/Bars/food/pixil-frame-0 (10).png"
import energy from "./assets/Bars/energy/pixil-frame-0 (10).png"
import fun from "./assets/Bars/fun/pixil-frame-0 (10).png"

import eat from "./assets/icons/restaurant-24px.svg"
import sleep from "./assets/icons/hotel-24px.svg"
import sing from "./assets/icons/audiotrack-24px.svg"
import pause from "./assets/icons/pause-24px.svg"
import mute from "./assets/icons/volume_up-24px.svg"

import song from "./assets/30 minutes of kirby music to make you feel better.mp3"

import React, {Component} from 'react'
import axios from 'axios'

export default class display extends Component {

    constructor(props){
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
        }
    }


    onSubmit(e){
        e.preventDefault()

        const user = {
            username: this.state.username,
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))

        this.setState({
            username: ''
        })

    }

    render() {
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
                    <input type="text" id='name' value="Korby"/>
                    <p id="age-display"> 0 sec old</p>

                </div>
            </div>
            <div className="bottom-ui ui-comp">
                <div className="actions">
                    <buttons className="action btn" id="feedBtn">
                        <img src={eat} className="icon feed" alt=""/>
                    </buttons>
                    <buttons className="action btn" id="sleepBtn">
                        <img src={sleep} className="icon sleep" alt=""/>
                    </buttons>
                    <buttons className="action btn" id="funBtn">
                        <img src={sing} className="icon fun" alt=""/>
                    </buttons>

                </div>
                <div className="settings">
                    <buttons className="setting btn" id="pauseBtn">
                        <img src={pause} className="icon pause" alt=""/>
                    </buttons>
                    <buttons className="setting btn" id="muteBtn">
                        <img src={mute} className="icon mute" alt=""/>
                    </buttons>
                    <buttons className="setting btn" id="muteBtn">
                        {/* <img src={mute} className="icon ex" alt="" onClick={() => { console.log('sd')}}/> */}
                    </buttons>
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
        )
    }

}