import '../css/section.css';
import { Route, Switch } from "react-router-dom";
import Subcontens from './sub/subcontents';
import InputSample from './sub/inputsample';


function Section() {
  return (
      <section>
        <Switch>
          <Route exact path="/" render={() => <InputSample />}></Route>
          <Route exact path="/sub" render={() => <Subcontens />}></Route>
        </Switch>
      </section>
  );
}

export default Section;
