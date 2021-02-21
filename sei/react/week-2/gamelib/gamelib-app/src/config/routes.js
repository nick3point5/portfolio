import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import GamesPage from '../pages/GamesPage';
import NewGamePage from '../pages/NewGamePage';
import EditGamePage from '../pages/EditGamePage';

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/games' component={GamesPage} />
    <Route path='/new-game' component={NewGamePage} />
    <Route path='/edit-game/:id' component={EditGamePage} />
  </Switch>
);

export default routes;
