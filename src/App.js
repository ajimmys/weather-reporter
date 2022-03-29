import day from './images/day_image.png'
import five_day from './images/seven_day_image.png'
import seven_day from './images/five_day_image.png'
import './App.scss';
import AppComponent from "./AppComponent";

function App() {
  return (
    <div className="App">
      <div className='controls'>
          <button className='circle'>
              <img src={day} alt="Day"/>
          </button>
        <button className='circle'>
            <img src={five_day} alt="5 Day"/>
        </button>
        <button className='circle'>
            <img src={seven_day} alt="7 Day"/>
        </button>
      </div>
        <AppComponent />
        <p className="attributions">Navigation Icons courtesy of <a href="https://www.flaticon.com/authors/pixel-prover">pixel prover</a> via Flaticon</p>
    </div>
  );
}

export default App;
