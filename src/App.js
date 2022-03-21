import logo from './logo.svg';
import day from './images/day_image.png'
import five_day from './images/five_day_image.png'
import seven_day from './images/seven_day_image.png'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='controls'>
          <button className='circle'>
              <img src={day} alt="Day Image"/>
          </button>
        <button className='circle'>
            <img src={five_day} alt="5 Day Image"/>
        </button>
        <button className='circle'>
            <img src={seven_day} alt="7 Day Image"/>
        </button>
      </div>
        <p className="attributions">Navigation Icons courtesy of <a href="https://www.flaticon.com/authors/pixel-prover">pixel prover</a> via Flaticon</p>
    </div>
  );
}

export default App;
