
import React, { useState } from 'react';

function InputSample(){
  /* input state 설정 */
  const [inputs, setInputs] = useState({
    name:'',
    nickname:''
  });
  
  const [text, setText] = useState({
    txt:''
  });
  /* state 저장 */
  const { name, nickname } = inputs;
  const { txt } = text;

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
      nickname:''
    });
  };
  /* onSet 이벤트로 state 다시 저장후 return*/
  const onSet = () => {
    const nameChk = name === '' ? "이름을 입력해주세요." : "이름은 " + name + '입니다.';
    const nickChk = nickname === '' ? " 별명을 입력해주세요." : " 별명은 " + nickname + '입니다.';
    setText({
      txt: nameChk + nickChk
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
        <p>{txt}</p>
        {/* <button onClick={addCom}>컴포넌트 추가</button>         */}
      </div>
    </div>
  );
}

export default InputSample;