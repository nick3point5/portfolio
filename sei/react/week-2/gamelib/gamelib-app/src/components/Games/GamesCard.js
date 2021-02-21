import { Link } from 'react-router-dom';

const GamesCard = (props) => {
  return (
    <div>
      <h4>{props.game.title}</h4>
      <button onClick={() => props.deleteGame(props.game._id)}>delete</button>{' '}
      <Link to={`/edit-game/${props.game._id}`}><button>Edit</button></Link>
      <hr />
      <br />
      <br />
    </div>
  );
};

export default GamesCard;
