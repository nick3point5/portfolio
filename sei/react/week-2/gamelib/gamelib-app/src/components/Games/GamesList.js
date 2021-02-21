import GamesCard from './GamesCard';

const GamesList = (props) => {
  return props.games.map((gamesObj) => {
    return <GamesCard key={gamesObj._id} game={gamesObj} deleteGame={props.deleteGame} />
  });
};

export default GamesList;
