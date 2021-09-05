import '../css/section.css';
import React, { useState } from 'react';
// import addComponet from './addComponent';
import { Route, Link, Switch } from "react-router-dom";


function InputSample(){
  /* input state 설정 */
  const [inputs, setInputs] = useState({
    name:'',
    nickname:'',
    text:''
  });
  /* state 저장 */
  const { name, nickname, text } = inputs;

  /* onChane 이벤트로 state 변경 */
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  /* onReset 이벤트로 state 초기화 */
  const onReset = () => {
    setInputs({
      name:'',
      nickname:'',
      text:''
    });
  };
  /* onSet 이벤트로 state 다시 저장후 return*/
  const onSet = () => {
    setInputs({
      name:name,
      nickname:nickname,
      text:"이름은 "+name+" 별명은 "+nickname+"입니다"
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name}/>
      <input name="nickname" placeholder="닉네임"  onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <p>{name} / ({nickname})님 오신걸 환영합니다.</p>
        <button onClick={onSet}>확인</button>
        <p>{text}</p>
        {/* <button onClick={addCom}>컴포넌트 추가</button>         */}
      </div>
    </div>
  );
}

function Section() {
  return (
    <section>
        <InputSample />
        {/* <addComponet  value={this.props} /> */}
    </section>
  );
}

export default Section;
