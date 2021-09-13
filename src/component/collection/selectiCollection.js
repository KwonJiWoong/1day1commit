import '../../css/component/select.css';
import selectData from '../../json/select.json';

/* props 받아올 순서 */
const selectOnClick = ((e) => {
    e.target.className = 'selected';
});
function Select(props){
    const selectDataValue = selectData[props.value];
    const selectTagList = selectDataValue.map((value, i) => {
        return(
            <li key={i} onClick={selectOnClick}>{value.valueTxt}</li>
        );
    });
    const selectTagOption = selectDataValue.map((value, i) => {
        return(
            <option key={i} value={value.valueTxt}>{value.valueTxt}</option>
        );
    });
    return(
        <div className="select-container">
            <ul className={props.type}>
                {selectTagList}
            </ul>
        </div>
    );
}

export default Select;