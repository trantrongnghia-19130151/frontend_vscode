import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/client/Home/Home';
import Theater from './containers/client/Theater/Theater';
import Review from './containers/client/Review/Review';
import About from './containers/client/About/About';
import { createBrowserHistory } from 'history';
import PageNotFound from './containers/shared/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from 'components/Footer/Footer';
import MovieDetail from 'containers/client/MovieDetail/MovieDetail';
import SeatPlan from 'containers/client/SeatPlan/SeatPlan';
import Info from 'containers/client/Infomation/Info';


export const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/theater" component={Theater} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
          <Route path="/movie-detail/:movieId" component={MovieDetail} />
          <Route path="/seat-plan/:showTimeId" component={SeatPlan} />
          <Route path ="/info" component={Info} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;

