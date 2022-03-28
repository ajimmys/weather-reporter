import React, {Component} from 'react'
import {convertDt, convertDescription} from './converstions'


class CurrentWeather extends Component{
    constructor(props){
        super(props)
        this.name = ""
    }

    //TODO Add weather effects based on current weather - https://codepen.io/ste-vg/pen/GqaZbo
    render(){
        return(
            <div className="current-weather">
                <span className="current-time">{convertDt(this.props.APIData["current"]["dt"])}</span>
                <span className="current-temp">
                    <span>{convertDescription(this.props.APIData["current"]["weather"][0]["description"])}</span>
                    <p>{this.props.APIData["current"]["temp"]+ ' \xB0F'}</p>
                </span>
            </div>
        );
    }
}

export default CurrentWeather