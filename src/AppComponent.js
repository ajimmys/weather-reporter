import React, {Component, useEffect} from "react";
import HourlyWeather from "./HourlyWeather";
import CurrentWeather from "./CurrentWeather";
import FiveDayWeather from "./FiveDayWeather";
import SevenDayWeather from "./SevenDayWeather";

class AppComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            APIResponse: null,
            latitude: null,
            longitude: null,
        };

        this.fetchLocAPI = this.fetchLocAPI.bind(this)
    }

    fetchLocAPI(){
        const lat = this.state.latitude
        const lon = this.state.longitude
        const APIKey = '90aba9bd7acc13c777cabeb25750abcc'
        const APICall =
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`
        fetch(APICall)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({APIResponse: response})
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.latitude != null) {
            if(this.state.APIResponse == null){
                this.fetchLocAPI()
            } else if (this.state.APIResponse['cod'] === 429){
                console.log("API Request limit reached")
            } else if (!this.state.APIResponse['lat']) {
                console.log("Fetching Weather Data")
            }
        } else {
            console.log("Fetching Location Data")
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(callback)
        let lat = null
        let lon = null

        function callback(position) {
            lat = position.coords.latitude
            lon = position.coords.longitude
        }

        this.interval = setInterval(() => this.setState({latitude: lat, longitude: lon}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let layout = (this.props.current === "hourly") ?
            <HourlyWeather
                APIData={this.state.APIResponse}/>
            : (this.props.current === "five_day") ?
                <FiveDayWeather
                    APIData={this.state.APIResponse}/>
                : <SevenDayWeather
                    APIData={this.state.APIResponse}/>

        return (
            this.state.APIResponse != null ? (
                <div className="weather-report-container">
                    <CurrentWeather
                        APIData={this.state.APIResponse}/>
                    {layout}
                </div>
            ) : (
                <div className="waitingMessage">
                    Gathering Weather Data...
                </div>
            )
        );
    }
}

export default AppComponent;