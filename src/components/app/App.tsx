import React from 'react';
import blackjack from '../../lib/games/blackjack';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">Casincrimental</header>
    <button type="button" onClick={blackjack}>
      Deal
    </button>
  </div>
);

export default App;
