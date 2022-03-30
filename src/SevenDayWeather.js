import React, {Component} from 'react'
import {convertFullDt, dayTextReformat, convertImage, convertDescription} from './converstions'

class SevenDayWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day_5: {
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
            day_6: {
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
        }

        this.loadDataToState = this.loadDataToState.bind(this)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.day_5['loaded'] === false) {
            this.loadDataToState()
        }
    }

    loadDataToState() {
        this.setState({day_5: {loaded: true}})
        for (let i = 5; i <= 6; i++) {
            let card_id = "day_" + i
            this.setState(() => ({
                [card_id]: {
                    day_mod: i,
                    loaded: true,
                    show_details: false,
                    time: this.props.APIData['daily'][i]['dt'],
                    day_temp: Math.round(this.props.APIData['daily'][i]['temp']['day']),
                    low_temp: Math.round(this.props.APIData['daily'][i]['temp']['min']),
                    high_temp: Math.round(this.props.APIData['daily'][i]['temp']['max']),
                    feels_like: Math.round(this.props.APIData['daily'][i]['feels_like']['day']),
                    image_code: this.props.APIData['daily'][i]['weather'][0]['icon'],
                    description: this.props.APIData['daily'][i]['weather'][0]['description'],
                    sunrise: this.props.APIData['daily'][i]['sunrise'],
                    sunset: this.props.APIData['daily'][i]['sunset'],
                    precipitation: this.props.APIData['daily'][i]['pop'],
                    wind: this.props.APIData['daily'][i]['wind_speed'],
                    humidity: this.props.APIData['daily'][i]['humidity'],
                    uv_index: this.props.APIData['daily'][i]['uvi'],
                }
            }));
        }
    }

    render() {
        let layouts = (this.state.day_5['loaded']) ? (
            Object.entries(this.state).map((daily_data) =>
                <span key={daily_data[0]}
                      className={"card-layout row-two"}>
                    <span className="card-top">
                        <p className='time'>{dayTextReformat(daily_data[1]['day_mod'], daily_data[1]['time'])}</p>
                    </span>
                    <span className='weather-conditions'>
                        <img src={convertImage(daily_data[1]['image_code'])}
                             alt="Hour's Weather"/>
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
                    <div className="additional_info">
                        <p>{"Sunrise: " + convertFullDt(daily_data[1]['sunrise'])}</p>
                        <p>{"Sunset: " + convertFullDt(daily_data[1]['sunset'])}</p>
                        <p>{"Precipitation: " + daily_data[1]['precipitation'] + "%"}</p>
                        <p>{"Humidity: " + daily_data[1]['humidity'] + "%"}</p>
                        <p>{"Wind: " + daily_data[1]['wind'] + "MPH"}</p>
                        <p>{"UV Index: " + daily_data[1]['uv_index']}</p>
                    </div>
                </span>
            )) : (
            <span>
            </span>
        )

        return (
            <div className="seven-day-container weekly-layout">
                {layouts}
            </div>
        );
    }
}

export default SevenDayWeather