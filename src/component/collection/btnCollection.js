import '../../css/component/button.css';
import {useState} from 'react';

/* props 받아올 순서 */
function Button({value, type, test_all}){
    const valueChk = value == null ? '기본 텍스트' : value;
    const typeChk = () => {
        if(test_all){
            return(
                <div>
                    <button className="btn-ty01">{valueChk}</button>
                    <pre class="code-view"><code>{'<button className="btn-ty01">기본 텍스트</button>'}</code></pre>
                    <button className="btn-ty02">{valueChk}</button>
                    <pre class="code-view"><code>{'<button className="btn-ty02">기본 텍스트</button>'}</code></pre>
                    <button className="btn-ty03">{valueChk}</button>
                    <pre class="code-view"><code>{'<button className="btn-ty03">기본 텍스트</button>'}</code></pre>
                    <button className="btn-default">{valueChk}</button>
                    <pre class="code-view"><code>{'<button className="btn-default">기본 텍스트</button>'}</code></pre>
                </div>);
        }else{
            switch (type) {
                case "01":
                    return(<button className="btn-ty01">{valueChk}</button>);
                    break;
                case "02":
                    return(<button className="btn-ty02">{valueChk}</button>);
                    break;
                case "03":
                    return(<button className="btn-ty03">{valueChk}</button>);
                    break;
                default:
                    return(<button className="btn-default">{valueChk}</button>);
                    break;
            }
        }
        
    };
    return(
        <div className="btn-wrap">{typeChk()}</div>
    );
}

export default Button;