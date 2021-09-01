import '../css/section.css';
import React, { useState } from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({
    name:'',
    nickname:''
  });
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name:'',
      nickname:''
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name}/>
      <input name="nickname" placeholder="닉네임"  onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      {/* <button onClick={onSet}>확인</button> */}
      <div>

    {name} / ({nickname})님 오신걸 환영합니다.
      </div>
    </div>
  );
}

function Section() {
  return (
    <section>
        <InputSample />
    </section>
  );
}

export default Section;
