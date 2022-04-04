import React, {Component} from 'react'
import Snap from "snapsvg-cjs";
import Clouds from "./Clouds";

class DrawWeather extends Component{
    constructor(props) {
        super(props)
        this.state = {
            windSpeed: 2,
            rainCount: 0,
            leafCount: 0,
            snowCount: 0,
            cloudHeight: 100,
            cloudSpace: 30,
            cloudArch: 50,
            renewCheck: 10,
            splashBounce: 80,
        }
    }

    componentDidMount() {
    }

    //TODO Make it so that clouds are continuously drawn
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render(){
        return(
            <div className="weather-svg-container">
                <Clouds />
            </div>
        );
    }
}

export default DrawWeather