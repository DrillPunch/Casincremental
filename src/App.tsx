import blackjack from './lib/games/blackjack';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        Casincrimental
      </header>
      <button onClick={blackjack}>
        Deal
      </button>
    </div>
  );
}

export default App;
