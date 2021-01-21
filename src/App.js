import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="">
            <Login />
          </Route>
          <Route path="/home"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
