import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { curry } from './utils/fp'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="">
           <div className="bg-gray-600 min-h-screen">
             <div className="">
               Hi
             </div>
           </div>
          </Route>
          <Route path="/home"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
