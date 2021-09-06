import './App.css';
import './css/reset.css';
import Header from './component/header';
import Section from './component/section';
import Footer from './component/footer';
import Newtest from './component/comtest/newtest';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  
  console.log(process.env.PUBLIC_URL)
  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Section}></Route>
          <Route exact path="/com" component={Newtest}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
