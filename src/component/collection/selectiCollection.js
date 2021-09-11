import '../../css/component/select.css';

/* props 받아올 순서 */
function Select({value, type, test_all}){
    const valueChk = value == null ? '기본 텍스트' : value;
    const SelectCon = () => {
        if(test_all){
            return(
                <div>
                    <div className="select-wrap select-ty01">
                        <label htmlFor="selectDefault">option1</label>
                        <select name="" id="selectDefault">
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                        </select>
                    </div>
                    <p>아직 미완성 select값 따라서 달라지게 만들어야 함 커스텀 셀렉트(hand made) 사용예정</p>
                </div>
                );
        }else{
            switch (type) {
                case "01":
                    return(
                        <div className="select-wrap select-ty01">
                            <label htmlFor="selectDefault"></label>
                            <select name="" id="selectDefault">
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                            <option value="option3">option3</option>
                            </select>
                        </div>
                    );
                    break;
                case "02":
                    return(
                        <div className="select-wrap select-ty02">
                            <label htmlFor="selectDefault"></label>
                            <select name="" id="selectDefault">
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                                <option value="option3">option3</option>
                            </select>
                        </div>
                    
                        );
                    break;
                case "03":
                    return(
                        <div className="select-wrap select-ty03">
                            <label htmlFor="selectDefault"></label>
                            <select name="" id="selectDefault">
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                                <option value="option3">option3</option>
                            </select>
                        </div>
                    );
                    
                    break;
                default:
                    return(
                        <div className="select-wrap select-default">
                            <label htmlFor="selectDefault"></label>
                            <select name="select" id="selectDefault">
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                                <option value="option3">option3</option>
                            </select>
                        </div>
                    );
                    break;
            }
        }
        
    };
    return(
        <div className="select-container">
            {SelectCon()}
        </div>
    );
}

export default Select;