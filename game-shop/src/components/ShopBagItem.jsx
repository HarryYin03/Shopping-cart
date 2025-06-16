// ShopBagItem.js

import React from 'react'; // No need for useState or useContext
import './shopBagItem.css';
// No need to import AppContext

// 1. Add 'handleRemove' to the props it receives
function ShopBagItem({ game, index, handleRemove }) {
    return (
        <tr className="shopBagItem">
            <th scope='row'>{index + 1}</th>
            <td><img src={game.img} alt={game.title} className='img-fluid' /></td>
            <td>{game.title}</td>
            <td>${game.price.toFixed(2)}</td>
            <td>{game.discount * 100}%</td>
            <td>${(game.price * (1 - game.discount)).toFixed(2)}</td>
            <td>
                {/* 2. Call the handleRemove function that was passed in */}
                <a href="#" onClick={() => handleRemove(game)}>
                    <i className="bi bi-trash-fill"></i>
                </a>
            </td>
        </tr>
    );
}

export default ShopBagItem;