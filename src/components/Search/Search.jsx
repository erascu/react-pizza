import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

import { SearchContext } from '../../App';

function Search() {
    const [value, setValue] = React.useState('');
    const { setSearchValue } = React.useContext(SearchContext);
    const inputRef = React.useRef();

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    }

    const updateSearchValue = React.useCallback(
        debounce(str => {
            setSearchValue(str);
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