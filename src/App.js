import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from './routes/index'
import { LoginPage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.ROOT} component={LoginPage} />
      </Switch>
    </ Router>
  );
}

export default App;
