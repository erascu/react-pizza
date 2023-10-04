import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';

import { setSearchValue } from "../../redux/slices/filterSlice";

function Search() {
    const dispatch = useDispatch();

    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus();
    }

    // eslint-disable-next-line
    const updateSearchValue = React.useCallback(
        debounce(str => {
            dispatch(setSearchValue(str));
        }, 350),
        [],
    );

    const onChangeInput = e => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} src="./img/search.svg" alt="Search" />
            <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input} placeholder='Поиск' />
            {value && <img onClick={onClickClear} className={styles.clearIcon} src="./img/clear.svg" alt="Close" />}
        </div>
    )
}

export default Search;