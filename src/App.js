// import './App.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListing from './Pages/Products/ProductListing';
import Payment from './Pages/Payment/Payment';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/listing'>
            Products
          </Link>
        </div>
        <hr />
        <Switch>
          <Route exact path="/">
            <ProductListing />
          </Route>
          <Route exact path="/listing">
            <ProductListing />
          </Route>
          <Route exact path="/payment/:type">
            <Payment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
