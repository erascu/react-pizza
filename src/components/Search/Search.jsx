import React from 'react';

import styles from './Search.module.scss';

import { SearchContext } from '../../App';

function Search() {
    const { searchValue, setSearchValue } = React.useContext(SearchContext);

    return (
        <div className={styles.root}>
            <img className={styles.icon} src="./img/search.svg" alt="Search" />
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)} className={styles.input} placeholder='Поиск' />
            {searchValue && <img onClick={() => setSearchValue('')} className={styles.clearIcon} src="./img/clear.svg" alt="Close" />}
        </div>
    )
}

export default Search;