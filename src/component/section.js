import '../css/section.css';
import { Route, Switch, browserHistory } from "react-router-dom";
import Subcontens from './sub/subcontents';
import InputSample from './sub/inputsample';
import BtnCollection from './collection/btnCollection';


function Section() {
  return (
      <section>
        <Switch>
          <Route exact path="/" render={() => <InputSample />}></Route>
          <Route exact path="/sub" render={() => <Subcontens />}></Route>
          <Route exact path="/btn" render={() => <BtnCollection test_all={true}/>}></Route>
        </Switch>
      </section>
  );
}

export default Section;
