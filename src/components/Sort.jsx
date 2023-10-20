import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, setPopUp } from '../redux/slices/filterSlice';

function Sort() {
    const sortRef = React.useRef();

    const dispatch = useDispatch();
    const { sortId, popUp } = useSelector(state => state.filter);

    const list = ['популярности', 'цене ↑', 'цене ↓', 'алфавиту ↑', 'алфавиту ↓'];
    const sortName = list[sortId]; //change category name when selected

    const onClickListItem = item => {
        dispatch(setSort(item));
        dispatch(setPopUp(false));
    }

    React.useEffect(() => { //mount - did mount
        const handleClickOutside = e => {
            if (!e.composedPath().includes(sortRef.current)) {
                dispatch(setPopUp(false));
            }
        }

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside); //in return we unmount handleClickOutside
    }, []); //this hook let us close the sort popUp if we click outside it

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                {popUp ? <svg
                    transform='rotate(180)'
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg> : <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>}
                <b>Сортировка по:</b>
                <span onClick={() => dispatch(setPopUp(!popUp))}>{sortName}</span> {/* setPopUp(!popUp) - toggle */}
            </div>
            {popUp && <div className="sort__popup">
                <ul>
                    {list.map((item, idx) => (
                        <li key={idx} onClick={() => onClickListItem(idx)} className={sortId === idx ? "active" : ''}>{item}</li>
                    ))}
                </ul>
            </div>}
        </div >
    )
}

export default Sort;