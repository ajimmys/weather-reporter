import React, {Component} from 'react'
import {convertDtDay, convertDescription, convertDtHour} from './converstions'


class CurrentWeather extends Component{
    constructor(props){
        super(props)
        this.name = ""
    }

    //TODO Add weather effects based on current weather - https://codepen.io/ste-vg/pen/GqaZbo
    render(){
        return(
            <div className="current-weather">
                <span className="current-temp">
                    <span>{convertDescription(this.props.APIData["current"]["weather"][0]["description"])}</span>
                    <p>{Math.round(this.props.APIData["current"]["temp"])+ ' \xB0F'}</p>
                </span>
                <span className="current-time">
                    {convertDtDay(this.props.APIData["current"]["dt"])+ " "+
                        convertDtHour(this.props.APIData["current"]["dt"])}
                </span>
            </div>
        );
    }
}

export default CurrentWeather