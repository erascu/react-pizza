import React from 'react';

function Categories({ categoryId, onChangeCategory }) {
    // const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    // const onClickCategory = index => {
    //     setActiveIndex(index);
    // }

    return (
        <div className="categories">
            <ul>
                {categories.map((item, idx) => (
                    <li key={idx} onClick={() => onChangeCategory(idx)} className={categoryId === idx ? 'active' : ''}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;