import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

import { SearchContext } from '../App';

function Home() {
    const dispatch = useDispatch();
    const { categoryId, sortId, currentPage } = useSelector(state => state.filter);

    const onChangePage = num => {
        dispatch(setCurrentPage(num));
    }

    const onChangeCategory = id => {
        dispatch(setCategoryId(id));
    };

    const { searchValue } = React.useContext(SearchContext);

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    // const [currentPage, setCurrentPage] = React.useState(1);

    // const [categoryId, setCategoryId] = React.useState(0);
    // const [sort, setSort] = React.useState(0);

    const sortList = ['-rating', '-price', 'price', 'title', '-title'];
    const sortBy = sortList[sortId];

    const category = categoryId > 0 ? `&category=${categoryId}*` : '';
    const search = searchValue ? `&title=*${searchValue}*` : ''; //search through backend for needed products

    React.useEffect(() => {
        setIsLoading(true);

        async function getData() {
            try {
                const resp = await axios.get(`https://3ba110d5c322f598.mokky.dev/items?page=${currentPage}&limit=8&sortBy=${sortBy}${category}${search}`);
                // const resp = await axios.get('https://steepy.free.mockoapp.net/items');

                setItems(resp.data);
                setIsLoading(false);

            } catch (error) {
                console.log(error);
            }
        }
        getData();
        window.scrollTo(0, 0); //scrolls the main page up (if we'd were on other page, on the bottom of it and clicked to go back to main page)
    }, [category, sortBy, search, currentPage]);
    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? [...new Array(4)].map((_, idx) => <Skeleton key={idx} />) : items.items.filter(item => {
                        return item.title.toLowerCase().includes(searchValue.toLowerCase())
                    }).map((item, idx) => <PizzaBlock key={idx} {...item} />)}
                </div>
                <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            </div>
        </>
    )
}

export default Home;


// {categoryId > 0 && categoryId === categoryId && items.filter(item => {
//     if (item.category === categoryId) {
//          return item.title.toLowerCase().includes(searchValue.toLowerCase())
//     }
// }).map((item, idx) => <PizzaBlock key={idx} {...item} />)}


// {isLoading ? [...new Array(4)].map((_, idx) => <Skeleton key={idx} />) : items.filter(item => {
//     return item.title.toLowerCase().includes(searchValue.toLowerCase())
// }).map(item => (<PizzaBlock key={item.id} {...item} />))} //this search is for static only
