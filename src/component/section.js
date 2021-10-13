import '../css/section.css';
import { Route, Switch } from "react-router-dom";
import Subcontens from './sub/subcontents';
import InputSample from './sub/inputsample';
import BtnCollection from './collection/btnCollection';
import SelectCollection from './collection/selectiCollection';
import Map from './sub/map';


function Section() {
  return (
      <section>
        <Switch>
          <Route exact path="/" render={() => <InputSample />}></Route>
          <Route exact path="/sub" render={() => <Subcontens />}></Route>
          <Route exact path="/btn" render={() => <BtnCollection test_all={true}/>}></Route>
          <Route exact path="/select" render={() => <SelectCollection value="family" type="type-01"/>}></Route>
          <Route exact path="/map" render={() => <Map />}></Route>
        </Switch>
      </section>
  );
}

export default Section;
