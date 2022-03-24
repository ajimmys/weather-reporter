import React, {Component} from 'react'


class HourlyWeather extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        /*const lat = this.props.latitude
        const lon = this.props.longitude
        const APIKey = '0c576f2fb08cd05df7c36e1bc6ef07ab'
        const APICall =
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`
        fetch(APICall)
            .then(response => response.json())
            .then(response => this.setState({APIResponse: response}))*/
    }

    render(){
        return(
            <div>
                {this.props.APIData['lat']}
            </div>
        );
    }
}

export default HourlyWeather