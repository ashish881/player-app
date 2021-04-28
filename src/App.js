import Header from './Component/Header';
import Player from './Component/Player';
import Footer from './Component/Footer';
import DateCountdown from 'react-date-countdown-timer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Player></Player>
      <Footer></Footer>

    </div>
  );
}

export default App;
