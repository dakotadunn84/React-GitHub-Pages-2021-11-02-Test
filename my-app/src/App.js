import logo from './monkey.png';
import './App.css';
import ReactPlayer from "react-player"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn Mandarin from the lyrics of popular songs at karaoke.
        </p>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IFTZtuXKzFs"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
