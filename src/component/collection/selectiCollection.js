import '../../css/component/select.css';
import selectData from '../../json/select.json';

/* props 받아올 순서 */
function Select(props){
    const testProps = props.value;
    const testData = selectData+'.'+testProps;
    console.log(testProps);
    console.log(testData);
    testData.map((value, i) => {
        console.log("key",i,"value",value)
    });
    // const selectDataArray = testData.map((id, value) => {
    //     return(
    //         {testData}
    //     );
    // });
    // const SelectCon = () => {
    //     console.log(value);
    //     console.log(selectDataArray.props.value);
    //     return(
    //         <div>
    //             <div className="select-wrap select-ty01">
    //                 <label htmlFor="selectDefault">option1</label>
    //                 <select name="" id="selectDefault">
    //                     <option value="option1">option1</option>
    //                     <option value="option2">option2</option>
    //                     <option value="option3">option3</option>
    //                 </select>
    //             </div>
    //             <p>아직 미완성 select값 따라서 달라지게 만들어야 함 커스텀 셀렉트(hand made) 사용예정</p>
    //         </div>
    //     );
    // };
    return(
        <div className="select-container">
        </div>
    );
}

export default Select;