import ReservationCard from './components/ReservationCard/ReservationCard';
import Thankyou from './components/Thankyou/Thankyou';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router >
      <div className="App">
        <img src={process.env.PUBLIC_URL + './assets/4.jpg'} alt="Cover Img" className="headImg" />
      
      <Switch>
        <Route exact path="/">
          <div>
            <ReservationCard />
          </div>
        </Route>

        <Route exact path="/thankyou">
          <div>
          <Thankyou />
          </div>
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
