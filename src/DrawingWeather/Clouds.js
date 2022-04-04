import React, {Component} from 'react'
import Snap from "snapsvg-cjs";

class Clouds extends Component{
    constructor(props){
        super(props)
        this.state ={
            settings: {
                windSpeed: 2,
                cloudHeight: 100,
                cloudSpace: 30,
                cloudArch: 50,
                renewCheck: 10,
            },
            clouds: [
            ]
        }
    }

    drawCloud(cloud, i){
        let space  = this.state.settings.cloudSpace * i;
        let height = space + this.state.settings.cloudHeight;
        let arch = height + this.state.settings.cloudArch + (Math.random() * this.state.settings.cloudArch);
        let width = window.innerWidth;

        let points = [];
        points.push('M' + [-(width), 0].join(','));
        points.push([width, 0].join(','));
        points.push('Q' + [width * 2, height / 2].join(','));
        points.push([width, height].join(','));
        points.push('Q' + [width * 0.5, arch].join(','));
        points.push([0, height].join(','));
        points.push('Q' + [width * -0.5, arch].join(','));
        points.push([-width, height].join(','));
        points.push('Q' + [- (width * 2), height/2].join(','));
        points.push([-(width), 0].join(','));

        let path = points.join(' ');
        if(!cloud.path) cloud.path = cloud.group.path();
        cloud.path.animate({
            d: path
        }, 0)

        /*
        let pos_x = this.props.start_position[0]
        let pos_y = this.props.start_position[1]

        let c = new Snap(`#${this.props.cloud_id}`)
        c.ellipse(pos_x, pos_y, 450, 100)
        c.ellipse(pos_x + 100, pos_y, 400, 100)
        c.ellipse(pos_x + 200, pos_y, 425, 100)
    */
    }

    componentDidMount() {
        let temp_clouds = [
            {group: Snap.select('#cloud1')},
            {group: Snap.select('#cloud2')},
            {group: Snap.select('#cloud3')}
        ]

        this.setState({
            clouds : temp_clouds
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        for(let i = 0; i < this.state.clouds.length; i++){
            this.setState({
                clouds: {
                    [i] : {
                        offset: Math.random() * window.innerWidth
                    }
                }
            })
            this.drawCloud(this.state.clouds[i], i)
        }
    }

    render(){
        return(
            <svg className="weather-svg-container">
                <g id='cloud3' className='cloud'/>
                <g id='cloud2' className='cloud'/>
                <g id='cloud1' className='cloud'/>
            </svg>
        );
    }
}

export default Clouds