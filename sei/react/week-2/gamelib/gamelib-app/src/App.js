import { Link } from 'react-router-dom';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>{' '}
        <Link to='/games'>Games</Link>{' '}
        <Link to='/new-game'>New Game</Link>
      </nav>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;
