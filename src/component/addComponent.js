import React, { useState } from 'react';


function addComponent(value){

  /* addComonent 이벤트로 state 활용한 컴포넌트 추가 */
  const addComonentEvt = () => {
    const addcomponent = <Welcome />;
    addWelcome({
      ...addWelcome, addcompo: addcomponent
    });
    return addcompo;
  };
  const Welcome = ()=> {
    // return (<h2>"이름은 "{name}"이고 별명은"{nickname}"이시네요!"</h2>);
  };

    /* welcome문구 state 설정 */
    const [welcome, addWelcome] = useState({
      addcompo:[]
    });
    
  const { addcompo } = welcome;

    return(
        <button onClick={addComonentEvt}>컴포넌트 추가</button>
    );
}

export default addComponent;