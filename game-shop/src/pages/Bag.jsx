// Bag.js

import React, { useContext } from 'react';
import './bag.css';
import ShopBagItem from '../components/ShopBagItem';
import { AppContext } from '../App';

function Bag({ reference }) {
  const { bag, setBag } = useContext(AppContext);

  const handleRemoveFromBag = (game) => {
    setBag(bag.filter(item => item._id !== game._id));
  };

  const calculateTotalPrice = () => {
    return bag.reduce((total, game) => {
      return total + game.price * (1 - game.discount);
    }, 0);
  };

  // --- Start of New Code ---
  const handleCheckOut = (e) => {
    e.preventDefault();
    alert('Thank you for your purchase!');
    setBag([]);
  };
  // --- End of New Code ---

  return (
    <section id="bag" className="bag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Bag</h1>
        </div>
      </div>
      {
        bag.length === 0 ? (
          <h2>Your Bag is Empty</h2>
        ) : (
          <>
            <div className="row">
              <div className="table-responsive">
                <table className="shopBagTable table table-borderless align-middle">
                  <thead>
                    {/* table headers... */}
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Preview</th>
                      <th scope="col">Game</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bag.map((game, index) => (
                      <ShopBagItem
                        key={game._id}
                        game={game}
                        index={index}
                        handleRemove={handleRemoveFromBag}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row d-flex justify-content-between mt-5">
              <div className="col-lg-2 d-flex align-items-center">
                <p className="itemCount">Total Items: <strong>{bag.length}</strong></p>
              </div>
              <div className="col-lg-10 d-flex justify-content-end">
                <div className="payment">
                  Total: ${calculateTotalPrice().toFixed(2)}
                  {/* --- Updated link --- */}
                  <a href="#" onClick={handleCheckOut}>
                    Check out <i className='bi bi-wallet-fill'></i>
                  </a>
                </div>
              </div>
            </div>
          </>
        )
      }
    </section>
  );
}

export default Bag;