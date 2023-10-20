import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './Search/Search';

function Header() {
    const { items, totalPrice } = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                    <div className="header__logo">
                        <img width="38" src="img/pizza-logo.svg" alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search />
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>{totalPrice} лей</span>
                        <div className="button__delimiter"></div>
                        <img src="./img/cart.svg" alt="Cart" />
                        <span>{totalCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;