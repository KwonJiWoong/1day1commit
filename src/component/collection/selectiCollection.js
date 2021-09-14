import '../../css/component/select.css';
import selectData from '../../json/select.json';
import {useState} from 'react';

/* props 받아올 순서 */
function Select(props){
    const [selectDataState, setSelectDataState] = useState({
        optionData:''
      });
      const [selectedState, setSelectedState] = useState({
        optionSelect:''
        });
    const optionData = selectData[props.value];
    const {optionSelect} = selectedState;
    const selectOnClick = ((e) => {
        const listWrap = e.target.parentNode;
        if(listWrap.classList.constains('open')){
            const value = e.target.innerText;
            setSelectedState({
                ...selectedState,
                optionSelect: value
              });
              listWrap.classList.remove('open');
              console.log(optionSelect);
        }else{
            listWrap.classList.add('open');

        }
    });

    const selectTagList = optionData.map((value, i) => {
        return(
            <li key={i} onClick={selectOnClick}>{value.valueTxt}</li>
        );
    });
    const selectTagOption = optionData.map((value, i) => {
        return(
            <option key={i} value={value.valueTxt}>{value.valueTxt}</option>
        );
    });
    return(
        <div className="select-container">
            <ul className={props.type}>
                {selectTagList}
            </ul>
            <div className="select-wrap">
                <label htmlFor={props.value}>{optionSelect}</label>
                <select name={props.value} id={props.value}>
                    {selectTagOption}
                </select>
            </div>
        </div>
    );
}

export default Select;