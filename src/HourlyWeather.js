import React, {Component} from 'react'


class HourlyWeather extends Component{
    constructor(props){
        super(props)
        this.state = {
            show_details: false
        }

    }

    componentDidMount() {
    }

    convertDt(dt){
        let date = new Date(dt*1000);
        let hour = date.getHours()

        if(hour > 12){
            hour = hour - 12
            return hour + ":00 PM"
        } else if(hour === 12){
            return hour + ":00 PM"
        }else if(hour === 0){
            return "12:00AM"
        } else{
            return hour + ":00 AM"
        }
    }

    convertImage(imageID){
        return 'http://openweathermap.org/img/wn/'+ imageID + '.png'
    }

    convertDescription(description){
        let words = description.split(" ")

        for( let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            if(i+1 !== words.length){
                words[i] += " "
            }
        }

        return words
    }

    //TODO ADD DROPDOWN FUNCTION FOR MORE DETAILS
    //TODO Add dropdown with more information
    //TODO Add weather effects based on current weather - https://codepen.io/ste-vg/pen/GqaZbo
    render(){
        const num_layouts = [0, 2, 4, 6, 8, 10]
        const hourly_layouts = num_layouts.map((n) =>
            <div key={n} className="hourly-layout">
                <span className="card-top">
                    <p className='time'>{this.convertDt(this.props.APIData['hourly'][n]['dt'])}</p>
                    <button className='drop-button' onClick={this.toggleDetails}> V </button>
                </span>
                <span className='weather-conditions'>
                    <img src={this.convertImage(this.props.APIData['hourly'][n]['weather'][0]['icon'])} alt="Hour's Weather"/>
                    <p className='description'>{this.convertDescription(this.props.APIData['hourly'][n]['weather'][0]['description'])}</p>
                </span>
                <p className='temp'>{this.props.APIData['hourly'][n]['temp'] + ' \xB0F'}</p>
                <span className='feels-like'>
                    <p>Feels like:</p>
                    <p>{this.props.APIData['hourly'][n]['feels_like'] + ' \xB0F'}</p>
                </span>
            </div>
        )
        return(
            <div className="weather-container weekly-layout">
                {hourly_layouts}
            </div>
        );
    }
}

export default HourlyWeather