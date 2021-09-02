import '../css/section.css';
import React, { useState } from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({
    name:'',
    nickname:'',
    text:''
  });
  const { name, nickname, text } = inputs;

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
      nickname:'',
      text:''
    });
  };

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
