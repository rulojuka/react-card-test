import './App.css';
import Card from './components/Card';
import Hand from './components/Hand';
import Rank from './model/Rank';
import Suit from './model/Suit';

const myCards = [
  { suit: Suit.DIAMONDS, rank: Rank.SEVEN },
  { suit: Suit.HEARTS, rank: Rank.KING },
  { suit: Suit.CLUBS, rank: Rank.TWO },
]

function App() {
  return (
    <div className="App">
      <Card rank={Rank.JACK} suit={Suit.DIAMONDS} />
      <Hand cards={myCards} />
    </div>
  );
}

export default App;
