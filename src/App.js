import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/"> 
          <h1 className="text-center">want to see the world click to home</h1>
        </Route>
        <Route path="/home">
          <Container></Container>
        </Route>
        <Route path="/country/:name">
          <CountryDetail></CountryDetail>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
