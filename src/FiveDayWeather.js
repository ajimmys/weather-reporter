import React, {Component} from 'react'
import {convertFullDt, dayTextReformat, convertImage, convertDescription, loadDataToState} from './converstions'


class FiveDayWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day_0: {
                day_mod: 0,
                loaded: false,
                show_details: false,
                time: 0,
                day_temp: 0,
                low_temp: 0,
                high_temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                sunrise: '',
                sunset: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            day_1: {
                day_mod: 1,
                loaded: false,
                show_details: false,
                time: 0,
                day_temp: 0,
                low_temp: 0,
                high_temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                sunrise: '',
                sunset: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            day_2: {
                day_mod: 2,
                loaded: false,
                show_details: false,
                time: 0,
                day_temp: 0,
                low_temp: 0,
                high_temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                sunrise: '',
                sunset: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            day_3: {
                day_mod: 3,
                loaded: false,
                show_details: false,
                time: 0,
                day_temp: 0,
                low_temp: 0,
                high_temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                sunrise: '',
                sunset: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            day_4: {
                day_mod: 4,
                loaded: false,
                show_details: false,
                time: 0,
                day_temp: 0,
                low_temp: 0,
                high_temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                sunrise: '',
                sunset: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            }
        }

        this.toggleDetails = this.toggleDetails.bind(this)
        this.loadDataToState = loadDataToState.bind(this)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.day_0['loaded'] === false) {
            this.loadDataToState(4, 0, this)
        }
    }

    toggleDetails(day_mod) {
        let day_id = "day_" + day_mod
        this.setState(prevState => ({
            [day_id]: {
                ...prevState[day_id],
                show_details: !prevState[day_id].show_details
            }
        }))
    }

    render() {

        let layouts = (this.state.day_0['loaded']) ? (
            Object.entries(this.state).map((daily_data) =>
                <span key={daily_data[0]}
                      className={`card-layout row-one ${daily_data[1]['show_details'] ? "taller focus" : "shorter"}`}>
                    <span className="card-top">
                        <p className='time'>{dayTextReformat(daily_data[1]['day_mod'], daily_data[1]['time'])}</p>
                        <button className='drop-button'
                                onClick={() => this.toggleDetails(daily_data[1]['day_mod'])}> V </button>
                    </span>
                    <span className='weather-conditions'>
                        <img src={convertImage(daily_data[1]['image_code'])}
                             alt="Day's Weather"/>
                        <p className='description'>{convertDescription(daily_data[1]['description'])}</p>
                    </span>
                    <span className="temperature-conditions">
                        <p className='temp'>{daily_data[1]['day_temp'] + ' \xB0F'}</p>
                        <div className="high-low-temp">
                            <span className='low-temp'>{daily_data[1]['low_temp'] + ' \xB0F'}</span>
                            <span className='high-temp'>{daily_data[1]['high_temp'] + ' \xB0F'}</span>
                        </div>
                        <span className='feels-like'>
                            <p>Feels like:</p>
                            <p>{daily_data[1]['feels_like'] + ' \xB0F'}</p>
                        </span>
                    </span>
                    <div className={`additional_info ${daily_data[1]['show_details'] ? "focus" : "hidden"}`}>
                        <p>{"Sunrise: " + convertFullDt(daily_data[1]['sunrise'])}</p>
                        <p>{"Sunset: " + convertFullDt(daily_data[1]['sunset'])}</p>
                        <p>{"Precipitation: " + daily_data[1]['precipitation'] + "%"}</p>
                        <p>{"Humidity: " + daily_data[1]['humidity'] + "%"}</p>
                        <p>{"Wind: " + daily_data[1]['wind'] + "MPH"}</p>
                        <p>{"UV Index: " + daily_data[1]['uv_index']}</p>
                    </div>
                </span>
            )) : (
            <div>
                Loading...
            </div>
        )

        return (
            <div className="weather-container weekly-layout">
                {layouts}
            </div>
        );
    }
}

export default FiveDayWeather