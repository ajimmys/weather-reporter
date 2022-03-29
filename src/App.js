import day from './images/day_image.png'
import seven_day from './images/seven_day_image.png'
import five_day from './images/five_day_image.png'
import './App.scss';
import AppComponent from "./AppComponent";
import React, {Component} from "react";

//TODO Make buttons change a variable and then pass that variable to the App component as "current"

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            current_display: "hourly"
        }

        this.change_display = this.change_display.bind(this)
    }

    change_display(change_value){
        this.setState({current_display: change_value})
    }

    render() {
        return(
            <div className="App">
                <div className='controls'>
                    <button className='circle' onClick={() => this.change_display("hourly")}>
                        <img src={day} alt="Day"/>
                    </button>
                    <button className='circle' onClick={() => this.change_display("five_day")}>
                        <img src={five_day} alt="5 Day"/>
                    </button>
                    <button className='circle' onClick={() => this.change_display("seven_day")}>
                        <img src={seven_day} alt="7 Day"/>
                    </button>
                </div>
                <AppComponent current={this.state.current_display}/>
                <p className="attributions">Navigation Icons courtesy of <a href="https://www.flaticon.com/authors/pixel-prover">pixel prover</a> via Flaticon</p>
            </div>
        );
    }
}

export default App;
