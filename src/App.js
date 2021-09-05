import './App.css';
import './css/reset.css';
import Header from './component/header';
import Section from './component/section';
import Footer from './component/footer';
import Newtest from './component/comtest/newtest';
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/1day1commit/build/" component={Section}></Route>
        <Route path="/1day1commit/build/com" component={Newtest}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
