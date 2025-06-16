import React, { useState, useEffect } from 'react'
import './categories.css';
import filterListData from '../data/filteListData';
import GameCard from '../components/GameCard';

function Categories({ games, reference }) {

  const [data, setData] = useState(games);
  useEffect(() => {
    setData(games);
  }, [games]);

  const [filters, setFilters] = useState(filterListData);
  const handleFilterGame = category => {
    setFilters(
      filters.map(filter => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === 'All') {
      setData(games);
      return;
    }
    setData(games.filter(game => game.category === category));
  };

  const [text, setText] = useState('');

  const handleSearch = e => {
    const searchValue = e.target.value.toLowerCase();
    setText(searchValue); // Update the text state

    setData(
      games.filter(game =>
        game.title.toLowerCase().includes(searchValue)
      )
    );
  };

  return <section id="categories" className='categories' ref={reference}>
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-lg-8 d-flex justify-content-start align-items-center">
          <ul className="filters">
            {
              filters.map(filter => (
                <li key={filter._id} className={`${filter.active ? 'active' : undefined}`} onClick={() => handleFilterGame(filter.name)}>{filter.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
          <div className="search">
            <i className="bi bi-search"></i>
            <input type="text" name='search' placeholder='Search' onChange={handleSearch} />
          </div>
        </div>
      </div>
      <div className="row">
        {data.map(game => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
    </div>
  </section>;
}

export default Categories
