import React from 'react';
import { SearchContext } from '../App';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярности (asc)',
    property: 'rating',
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    setIsLoading(true);

    const search = searchValue ? `search=${searchValue}` : '';
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const order = activeSort.property.includes('-') ? 'desc' : 'asc';
    const sort = activeSort.property.replace('-', '');

    fetch(
      `https://6273a230345e1821b21ec189.mockapi.io/items?page=${currentPage}&limit=4&${search}&${category}&sortBy=${sort}&order=${order}`,
    )
      .then((response) => response.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  }, [activeCategory, activeSort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={activeCategory} onChangeCategory={(index) => setActiveCategory(index)} />
        <Sort
          value={activeSort}
          onChangeSort={(obj) => {
            setActiveSort(obj);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <PizzaBlockSkeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>

      <Pagination pages={3} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Home;
