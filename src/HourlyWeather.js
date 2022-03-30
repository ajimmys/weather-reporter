import React, {Component} from 'react'
import {convertImage, convertDescription, convertDtHour} from './converstions'


class HourlyWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hour_1: {
                loaded: false,
                hour_mod: 1,
                show_details: false,
                time: 0,
                temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            hour_3: {
                hour_mod: 3,
                show_details: false,
                time: 0,
                temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            hour_5: {
                hour_mod: 5,
                show_details: false,
                time: 0,
                temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            hour_7: {
                hour_mod: 7,
                show_details: false,
                time: 0,
                temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            },
            hour_9: {
                hour_mod: 9,
                show_details: false,
                time: 0,
                temp: 0,
                feels_like: 0,
                image_code: '',
                description: '',
                precipitation: 0,
                wind: 0,
                humidity: 0,
                uv_index: 0
            }
        }

        this.loadDataToState = this.loadDataToState.bind(this)
        this.toggleDetails = this.toggleDetails.bind(this)

    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.hour_1['loaded'] === false) {
            this.loadDataToState()
        }
    }

    loadDataToState() {
        this.setState({hour_1: {loaded: true}})
        for (let i = 1; i <= 9; i += 2) {
            let card_id = "hour_" + i
            this.setState(() => ({
                [card_id]: {
                    hour_mod: i,
                    loaded: true,
                    show_details: false,
                    time: this.props.APIData['hourly'][i]['dt'],
                    temp: Math.round(this.props.APIData['hourly'][i]['temp']),
                    feels_like: Math.round(this.props.APIData['hourly'][i]['feels_like']),
                    image_code: this.props.APIData['hourly'][i]['weather'][0]['icon'],
                    description: this.props.APIData['hourly'][i]['weather'][0]['description'],
                    precipitation: this.props.APIData['hourly'][i]['pop'],
                    wind: this.props.APIData['hourly'][i]['wind_speed'],
                    humidity: this.props.APIData['hourly'][i]['humidity'],
                    uv_index: this.props.APIData['hourly'][i]['uvi'],
                }
            }));
        }
    }

    toggleDetails(hour_mod){
        let hour_id = "hour_" + hour_mod
        this.setState(prevState => ({
            [hour_id]: {
                ...prevState[hour_id],
                show_details: !prevState[hour_id].show_details
            }
        }))
    }

    render() {

        let layouts = (this.state.hour_1['loaded']) ? (
            Object.entries(this.state).map((hourly_data) =>
                <span key={hourly_data[0]} className={`card-layout row-one ${hourly_data[1]['show_details'] ? "taller" : "shorter"}`}>
                    <span className="card-top">
                        <p className='time'>{convertDtHour(hourly_data[1]['time'])}</p>
                        <button className='drop-button' onClick={() => this.toggleDetails(hourly_data[1]['hour_mod'])}> V </button>
                    </span>
                        <span className='weather-conditions'>
                        <img src={convertImage(hourly_data[1]['image_code'])}
                             alt="Hour's Weather"/>
                        <p className='description'>{convertDescription(hourly_data[1]['description'])}</p>
                    </span>
                    <span className="temperature-conditions">
                        <p className='temp'>{hourly_data[1]['temp'] + ' \xB0F'}</p>
                        <span className='feels-like'>
                        <p>Feels like:</p>
                        <p>{hourly_data[1]['feels_like'] + ' \xB0F'}</p>
                    </span>
                        </span>
                    <div className={`additional_info ${hourly_data[1]['show_details'] ? "" : "hidden"}`}>
                        <p>{"Precipitation: " + (hourly_data[1]['precipitation']*100) + "%"}</p>
                        <p>{"Humidity: " + hourly_data[1]['humidity'] + "%"}</p>
                        <p>{"Wind: " + hourly_data[1]['wind'] + "MPH"}</p>
                        <p>{"UV Index: " + hourly_data[1]['uv_index']}</p>
                    </div>
                </span>
            )) : (
                <div>
                    Loading...
                </div>
        )

        return (
            <div className="weather-container hourly-layout">
                {layouts}
            </div>
        );
    }
}

export default HourlyWeather