import '../../css/component/select.css';
import selectData from '../../json/select.json';
import {useState} from 'react';

/* props 받아올 순서 */
function Select(props){
    const [selectDataState, setSelectDataState] = useState({
        optionData:''
      });
      const [selectedState, setSelectedState] = useState({
        optionSelect:'선택하세요',
        optionSelectIndex:'0'
        });
    const optionData = selectData[props.value];
    const {optionSelect, optionSelectIndex} = selectedState;
    const selectOnClick = ((e) => {
        const listWrap = e.target.parentNode;
        if(listWrap.classList.contains('open')){
            const value = e.target.innerText;
            setSelectedState({
                ...selectedState,
                optionSelect: value,
                optionSelectIndex:e.currentTarget
              });
              console.log(optionSelectIndex)
              listWrap.classList.remove('open');
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