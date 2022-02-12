import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from './routes/index'
import { HomePage, LoginPage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={HomePage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
      </Switch>
    </ Router>
  );
}

export default App;
